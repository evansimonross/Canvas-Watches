var convert = require('xml-js');
var parser = require('luaparse');
var fs = require('fs');
var AdmZip = require('adm-zip');
var variables = require('./variables.js')

var interpret = (lua) => {
    var ast = parser.parse(lua);
    return ast;
}

var extract = (watchName) => {
    if (watchName.indexOf('.watch') > -1) {
        watchName = watchName.substring(0, watchName.indexOf('.watch'));
    }

    // reading archives
    var zipWatch = new AdmZip("../watches/" + watchName + '.watch');
    zipWatch.extractAllTo("../watches/" + watchName + '/', true);
    getWatch(watchName);
}

var getWatch = (watchName) => {
    var xmlWatch = fs.readFileSync('../watches/' + watchName + '/watch.xml', 'utf8');
    var options = { compact: true, ignoreComment: true, alwaysChildren: true };
    var jsWatch = convert.xml2js(xmlWatch, options);

    var script = interpret(fs.readFileSync('../watches/' + watchName + '/scripts/script.txt', 'utf8'));
    jsWatch.Watch.Script = script;

    // Parse the jsWatch file's layers for displayable content
    var parse = () => {
        var layers = jsWatch.Watch.Layer;
        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            for (attribute in layer['_attributes']) {
                var statement = layer['_attributes'][attribute];
                if (/([A-Fa-f0-9]{6})$/.test(statement)) {
                    statement = '"#' + statement + '"';
                }
                layer['_attributes'][attribute] = /{/.test(statement) ? interpret(attribute + '=' + statement) : statement;
            }
        }
        jsWatch.Watch.Layer = layers;

        // create a permanent file with a unique filename for reuse
        fs.writeFile(`${watchName}.js`, `var watch = ${JSON.stringify(jsWatch, null, 2)}`, (err) => {
            if (err) { console.error(err) }
            console.log('Saved')
        })

        var canvasJS = {
            declarations: ['var math = { rad: function (degrees) { return degrees / 180 * Math.PI; }, sin: function (degrees) { return Math.sin(degrees / 180 * Math.PI); }, cos: function (degrees) { return Math.cos(degrees / 180 * Math.PI); }, floor: function (input) { return Math.floor(input); } }',
                'var canvas = document.getElementById("canvas");',
                'var ctx = canvas.getContext("2d");',
                'var radius = canvas.height / 2;',
                'ctx.translate(radius, radius);',
                'setInterval(drawClock, 10);',
            ],
            timeVariables: [variables.time.now, variables.time.hour, variables.time.minute, variables.time.second, variables.time.millisecond],
            drawFunctions: [variables.draw.drawFace],

            generate: function (file) {
                var text = "";
                var variablesAdded = [];
                var functionsAdded = [];

                // Evaluate lua chunks
                var chunk = (input) => {
                    if (!(input.type)) { return input; }
                    var type = input.type;
                    switch (type) {
                        case "Chunk":
                            return chunk(input.body[0]);
                        case "AssignmentStatement":
                            return chunk(input.init[0]);
                        case "LogicalExpression":
                            if (input.operator === "or") {
                                return input.left.operator === "and" ? chunk(input.left.left) + ' ? ' + chunk(input.left.right) + ' : ' + chunk(input.right) : chunk(input.left) + ' || ' + chunk(input.right);
                            }
                            else if (input.operator === "and") {
                                return chunk(input.left) + ' && ' + chunk(input.right);
                            }
                        case "UnaryExpression":
                            if (input.operator === "~") {
                                return "!" + chunk(input.argument);
                            }
                            else {
                                return input.operator + chunk(input.argument);
                            }
                        case "BinaryExpression":
                            if (input.operator === "~=") {
                                return chunk(input.left) + '!=' + chunk(input.right);
                            }
                            else {
                                return chunk(input.left) + input.operator + chunk(input.right);
                            }
                        case "TableConstructorExpression":
                            if (input.fields.length === 1) {
                                var variableName = input.fields[0].value.name;
                                if (variablesAdded.indexOf(variableName) === -1) {
                                    this.timeVariables.push(variables.time[variableName]);
                                    variablesAdded.push(variableName);
                                }
                                return variableName;
                            }
                            else{
                                var array = '[0, '; // start with something empty because lua arrays begin at index 1
                                for(var i=0; i<input.fields.length; i++){
                                    array+= chunk(input.fields[i].value);
                                    if(i === input.fields.length -1){
                                        array += "]";
                                    }
                                    else{
                                        array += ", ";
                                    }
                                }
                                return array;
                            }
                        case "CallExpression":
                            if (input.base.type === "MemberExpression") {
                                var func = input.base.base.name + input.base.indexer + input.base.identifier.name;
                                var params = [];
                                for (var i = 0; i < input.arguments.length; i++) {
                                    params.push(chunk(input.arguments[i]));
                                }
                                return func + '(' + params + ')';
                            }
                            else {
                                // What other types of CallExpressions exist?
                                return "";
                            }
                        case "IndexExpression":
                            var variableName = input.base.name;
                            if (variablesAdded.indexOf(variableName) === -1) {
                                for (var i = 0; i < script.body.length; i++) {
                                    if (script.body[i].variables[0].name === variableName) {
                                        this.declarations.push('var ' + variableName + ' = ' + chunk(script.body[i].init[0]));
                                        variablesAdded.push(variableName);
                                        break;
                                    }
                                }
                            }
                            return variableName + '[' + chunk(input.index) + ']';
                        case "NumericLiteral": return input.value;
                        case "StringLiteral":
                            if (/^([A-Fa-f0-9]{6})$/.test(input.value)) {
                                return '"#' + input.value + '"';
                            }
                            else {
                                return input.value;
                            }
                        default: return "";
                    }
                }

                // read layers from file and generate drawComponents function.
                // adds necessary draw functions as needed
                var drawComponents = {
                    name: 'drawComponents',
                    params: [],
                    lines: []
                };

                for (var i = 0; i < layers.length; i++) {
                    var layer = layers[i]["_attributes"];
                    if (layer.type === "shape") {
                        if (layer.shape === "Circle") {
                            if (functionsAdded.indexOf("Circle") === -1) {
                                this.drawFunctions.push(variables.draw.drawCircle);
                                functionsAdded.push("Circle");
                            }
                            var line = 'drawCircle(';
                        }
                        else if (layer.shape === "Triangle") {
                            if (functionsAdded.indexOf("Triangle") === -1) {
                                this.drawFunctions.push(variables.draw.drawTriangle);
                                this.drawFunctions.push(variables.util.adjustTriangleHeight);
                                functionsAdded.push("Triangle");
                            }
                            var line = 'drawTriangle(';
                        }

                        // x-coord of center
                        let x = chunk(layer.x);
                        line += x + ', ';

                        // y-coord of center
                        let y = chunk(layer.y);
                        line += y + ', ';

                        // width of shape
                        let w = chunk(layer.width);
                        line += w + ', ';

                        // height of shape
                        let h = chunk(layer.height);
                        if (layer.shape === "Triangle") { h = 'adjustTriangleHeight(' + h + ')' }
                        line += h + ', ';

                        // rotation
                        let rotation = chunk(layer.rotation);
                        line += rotation + ', ';

                        // color
                        let color = "";
                        if (layer.shader === "GradientLinear") {
                            if (functionsAdded.indexOf("GradientLinear") === -1) {
                                this.drawFunctions.push(variables.draw.drawGradientLinear);
                                functionsAdded.push("GradientLinear");
                            }
                            color = 'drawGradientLinear(';
                            let start = chunk(layer.u_1);
                            color += start + ', ';
                            let end = chunk(layer.u_2);
                            color += end + ', ';
                            let rotation = chunk(layer.u_3);
                            color += rotation + ', ';
                            let scale = chunk(layer.u_4);
                            color += scale + ', ';
                            let length = h;
                            color += length + ')';
                        }
                        else {
                            color = chunk(layer.color);
                        }
                        line += color + ');';

                        drawComponents.lines.push(line);
                    }
                    // non-shape layers
                    else {

                    }
                }
                this.drawFunctions.push(drawComponents);

                // top level declarations 
                for (var i = 0; i < this.declarations.length; i++) {
                    text += this.declarations[i] + "\n";
                }
                text += "\n";
                for (var i = 0; i < this.timeVariables.length; i++) {
                    text += 'var ' + this.timeVariables[i].name + ';\n';
                }
                text += "\n";

                // draw clock
                text += 'function drawClock() {\n';
                for (var i = 0; i < this.timeVariables.length; i++) {
                    text += '  ' + this.timeVariables[i].name + ' = ' + this.timeVariables[i].declaration + ';\n';
                }
                text += "\n";
                for (var i = 0; i < this.drawFunctions.length; i++) {
                    var f = this.drawFunctions[i];
                    if (f.params.length === 0) { text += '  ' + f.name + '();\n'; }
                }
                text += '  cutOut();\n';
                text += '}\n\n';

                // cut out (called last)
                text += 'function cutOut() { \n  ctx.save(); \n  ctx.translate(-radius, -radius); \n  ctx.globalCompositeOperation = "destination-in";\n'
                text += '  ctx.beginPath(); \n  ctx.arc(radius, radius, radius, 0, 2 * Math.PI); \n  ctx.fill(); \n  ctx.restore(); \n}\n\n'

                // draw functions
                for (var i = 0; i < this.drawFunctions.length; i++) {
                    var f = this.drawFunctions[i];
                    text += 'function ' + f.name + '(' + f.params + ') {\n';
                    for (var j = 0; j < f.lines.length; j++) {
                        text += '  ' + f.lines[j] + "\n";
                    }
                    text += "}\n\n";
                }
                fs.writeFile(file, text, (err) => {
                    if (err) { console.error(err) }
                });
            }

        }

        canvasJS.generate('watch.js');
    }

    parse();
}

extract(process.argv[2]);