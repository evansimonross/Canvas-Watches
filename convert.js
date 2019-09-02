var convert = require('xml-js');
var parser = require('luaparse');
var fs = require('fs');
var AdmZip = require('adm-zip');
var variables = require('./variables.js');

var interpret = (lua) => {
    var ast = parser.parse(lua);
    return ast;
}

var extract = (watchName) => {
    if (watchName) {
        if (watchName.indexOf('.watch') > -1) {
            watchName = watchName.substring(0, watchName.indexOf('.watch'));
        }

        // reading archives
        var zipWatch = new AdmZip("watches/" + watchName + '.watch');
        zipWatch.extractAllTo("watches/" + watchName + '/', true);
        fs.unlink("watches/" + watchName + "/preview.jpg", (err) => { });
        fs.unlink("watches/" + watchName + "/preview_dim.jpg", (err) => { });
        getWatch(watchName);
    }
    else {
        console.log("ERROR: Please include the name of your watch file in the command line after 'node convert'");
    }
}

var getWatch = (watchName) => {
    var xmlWatch = fs.readFileSync('watches/' + watchName + '/watch.xml', 'utf8');
    var options = { compact: true, ignoreComment: true, alwaysChildren: true };
    var jsWatch = convert.xml2js(xmlWatch, options);

    // Save the raw json from the xmp for bug checking and further development
    if (process.argv[3] === "raw") {
        fs.writeFile(`watches/${watchName}RAW.js`, `var watch = ${JSON.stringify(jsWatch, null, 2)}`, (err) => {
            if (err) { console.error(err) }
            console.log('Saved as raw, unparsed JSON')
        })
    }

    // Add the script

    var script;
    try {
        script = interpret(fs.readFileSync('watches/' + watchName + '/scripts/script.txt', 'utf8'));
        jsWatch.Watch.Script = script;
    }
    catch (err) {
        // No script
    }

    // Parse the jsWatch file's layers for displayable content
    var parse = () => {
        var layers = jsWatch.Watch.Layer;
        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            for (attribute in layer['_attributes']) {
                var statement = layer['_attributes'][attribute];
                if (/^script/.test(statement)) { layer['_attributes'][attribute] = interpret(statement.substring(7, statement.length)); }
                else {
                    try {
                        layer['_attributes'][attribute] = interpret(attribute + '=' + statement);
                    }
                    catch (err) {
                        // Add concatenation for strings combined with watchmakers tags
                        if (/(\{)/.test(statement)) {
                            var test = statement;
                            while (test.indexOf("{") != -1) {
                                test = test.substring(0, test.indexOf("{")) + test.substring(test.indexOf("}") + 1, test.length);
                            }
                            test.trim();
                            if (test != "") {
                                var split = statement.split("");
                                var inTag = false;
                                var inString = false;
                                statement = "";
                                for (var j = 0; j < split.length; j++) {
                                    var char = split[j];
                                    if (char === "") { continue; }
                                    if (char === "{") {
                                        if (statement === "") {
                                            statement += "{";
                                        }
                                        else {
                                            if (inString) {
                                                statement += '"';
                                                inString = false;
                                            }
                                            statement += " .. {";
                                        }
                                        inTag = true;
                                    }
                                    else if (char === "}") {
                                        statement += "}";
                                        if (j != split.length - 1) {
                                            statement += " .. ";
                                        }
                                        inTag = false;
                                    }
                                    else {
                                        if (inTag || inString) {
                                            statement += char;
                                        }
                                        else {
                                            inString = true;
                                            statement += '"' + char;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            statement = '"' + statement + '"';
                        }
                        try {
                            layer['_attributes'][attribute] = interpret(attribute + '=' + statement);
                        }
                        catch (err) {
                            console.error(err);
                        }
                    }
                }
            }
        }
        jsWatch.Watch.Layer = layers;

        // Save the AST for bug checking and further development
        if (process.argv[3] === "ast") {
            fs.writeFile(`watches/${watchName}AST.js`, `var watch = ${JSON.stringify(jsWatch, null, 2)}`, (err) => {
                if (err) { console.error(err) }
                console.log('Saved as AST')
            })
        }

        var canvasJS = {
            declarations: ['var math = { rad: function (degrees) { return degrees / 180 * Math.PI; }, sin: function (degrees) { return Math.sin(degrees / 180 * Math.PI); }, cos: function (degrees) { return Math.cos(degrees / 180 * Math.PI); }, floor: function (input) { return Math.floor(input); }, abs: function (input) { return input < 0 ? input*-1 : input; } }',
                'var canvas = document.getElementById("canvas");',
                'var ctx = canvas.getContext("2d");',
                'var radius = canvas.height / 2;',
                'ctx.translate(radius, radius);',
                'setInterval(drawClock, 10);',
            ],
            timeVariables: [variables.time.now, variables.time.year, variables.time.month, variables.time.date, variables.time.day, variables.time.hour, variables.time.minute, variables.time.second, variables.time.millisecond],
            drawFunctions: [variables.draw.drawFace, variables.util.adjustColor],
            scriptFunctions: [],
            images: [],
            fonts: [],

            generate: function (file) {
                var text = "";
                var variablesAdded = ["now", "year", "month", "date", "day", "hour", "minute", "second", "millisecond"];
                var functionsAdded = [];
                var functionParse = false;

                // Evaluate lua chunks
                var chunk = (input) => {
                    if (!(input)) { return input; }
                    if (!(input.type)) { return input; }
                    var type = chunk(input.type);
                    var arr = [];
                    switch (type) {
                        case "Chunk":
                            return chunk(input.body[0]);
                        case "LocalStatement":
                            if (input.init.length === 1) {
                                return "var " + input.variables[0].name + " = " + chunk(input.init[0]) + ";";
                            }
                            for (var i = 0; i < input.init.length; i++) {
                                arr.push(chunk(input.init[i]));
                            }
                            return "var " + input.variables[0].name + " = [" + arr + "];";
                        case "AssignmentStatement":
                            if (input.init.length === 1) {
                                return functionParse ? input.variables[0].name + " = " + chunk(input.init[0]) + ";" : chunk(input.init[0]);
                            }
                            for (var i = 0; i < input.init.length; i++) {
                                arr.push(chunk(input.init[i]));
                            }
                            return functionParse ? input.variables[0].name + " = [" + arr + "];" : arr;
                        case "LogicalExpression":
                            var check = (inside) => {
                                if(inside.type==="LogicalExpression"){
                                    if(inside.operator === "and") {
                                        if(check(inside.left)==="boolean" && check(inside.right)==="value") return "conditional";
                                        return "boolean";
                                    }
                                    else{
                                        if(check(inside.left)==="conditional") return "conditional";
                                        return "boolean";
                                    }
                                }
                                else if(inside.type==="BinaryExpression"){
                                    switch(inside.operator){
                                        case "+": return "value";
                                        case "-": return "value";
                                        case "*": return "value";
                                        case "/": return "value";
                                        case "%": return "value";
                                        case "..": return "value";
                                        default: return "boolean";
                                    }
                                }
                                else{
                                    return "value";
                                }
                            }
                            var expressionType = check(input);
                            switch(expressionType){
                                case "boolean":
                                    if(input.operator === "or") {
                                        return chunk(input.left) + " || " + chunk(input.right);
                                    }
                                    else if(input.operator === "and") {
                                        return chunk(input.left) + " && " + chunk(input.right);
                                    }
                                case "conditional":
                                    if(input.operator === "or"){
                                        return chunk(input.left) + " : " + chunk(input.right);
                                    }
                                    else if(input.operator === "and"){
                                        return chunk(input.left) + " ? " + chunk(input.right);
                                    }
                            }
                        case "UnaryExpression":
                            if (input.operator === "~" || input.operator === "not") {
                                return "!" + chunk(input.argument);
                            }
                            else {
                                return input.operator + chunk(input.argument);
                            }
                        case "BinaryExpression":
                            if (input.operator === "~=") {
                                return '(' + chunk(input.left) + '!=' + chunk(input.right) + ')';
                            }
                            else if (input.operator === "==") {
                                return '(' + chunk(input.left) + '===' + chunk(input.right) + ')';
                            }
                            else if (input.operator === "..") {
                                return '(' + chunk(input.left) + '+' + (input.left.type==="StringLiteral" || input.right.type==="StringLiteral" ? "" : "''+") + chunk(input.right) + ')';
                            }
                            else {
                                return '(' + chunk(input.left) + input.operator + chunk(input.right) + ')';
                            }
                        case "TableConstructorExpression":
                            if (input.fields.length === 1) {
                                var variableName = input.fields[0].value.name.toLowerCase();
                                if (variablesAdded.indexOf(variableName) === -1) {
                                    if (variableName === "ucolor") {
                                        this.declarations.push('var ucolor = "#' + jsWatch.Watch["_attributes"]["ucolor_default"] + '";')
                                    }
                                    else {
                                        if (variables.time[variableName]) {
                                            this.timeVariables.push(variables.time[variableName]);
                                        }
                                        else {
                                            this.timeVariables.push({ name: variableName, declaration: "0" })
                                            console.log("No declaration found for " + variableName);
                                        }
                                    }
                                    variablesAdded.push(variableName);
                                }

                                return variableName;
                            }
                            else {
                                var array = '[0, '; // start with something empty because lua arrays begin at index 1
                                for (var i = 0; i < input.fields.length; i++) {
                                    array += chunk(input.fields[i].value);
                                    if (i === input.fields.length - 1) {
                                        array += "]";
                                    }
                                    else {
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
                                functionParse = true;
                                var func = input.base.name;
                                var params = [];
                                for (var i = 0; i < input.arguments.length; i++) {
                                    params.push(chunk(input.arguments[i]));
                                }
                                if (functionsAdded.includes(func + "_func")) {
                                    func = func + "_func";
                                }
                                if (functionsAdded.indexOf(func) === -1) {
                                    var f = { name: func, params: [], lines: [] };
                                    for (var i = 0; i < script.body.length; i++) {
                                        if (script.body[i].type != "AssignmentStatement") { continue; }
                                        if (script.body[i].variables[0].name != f.name) { continue; }
                                        var expression = script.body[i].init[0];
                                        if (expression.type != "FunctionDeclaration") { continue; }
                                        if (variablesAdded.includes(f.name) || functionsAdded.includes(f.name)) {
                                            f.name = f.name + "_func";
                                            func = func + "_func";
                                        }
                                        for (var j = 0; j < expression.parameters.length; j++) {
                                            f.params.push(expression.parameters[j].name);
                                        }
                                        for (var k = 0; k < expression.body.length; k++) {
                                            f.lines.push(chunk(expression.body[k]));
                                        }
                                    }
                                    functionsAdded.push(f.name);
                                    this.scriptFunctions.push(f);
                                }
                                functionParse = false;
                                return func + '(' + params + ')';
                            }
                        case "TableCallExpression":
                            if (input.base.type === "Identifier") {
                                return '"' + input.base.name + '"+' + chunk(input.arguments);
                            }
                        case "MemberExpression":
                            var baseName = input.base.name;
                            if (variablesAdded.indexOf(baseName) === -1) {
                                variablesAdded.push(baseName);
                            }
                            var variableName = input.identifier.name;
                            if (variablesAdded.indexOf(baseName + "." + variableName) === -1) {
                                for (var i = 0; i < script.body.length; i++) {
                                    if (script.body[i].type != "AssignmentStatement") { continue; }
                                    var expression = script.body[i].variables[0];
                                    if (expression.type != "MemberExpression") { continue; }
                                    if (expression.identifier.name === variableName && expression.base.name === baseName) {
                                        this.declarations.push(baseName + "." + variableName + ' = ' + chunk(script.body[i].init[0]) + ';');
                                        variablesAdded.push(baseName + "." + variableName);
                                        break;
                                    }
                                }
                            }
                            return baseName + "." + variableName;
                        case "IndexExpression":
                            var variableName = input.base.name;
                            if (variablesAdded.indexOf(variableName) === -1) {
                                for (var i = 0; i < script.body.length; i++) {
                                    if (script.body[i].variables[0].name === variableName) {
                                        this.declarations.push('var ' + variableName + ' = ' + chunk(script.body[i].init[0]) + ';');
                                        variablesAdded.push(variableName);
                                        break;
                                    }
                                }
                            }
                            return variableName + '[' + chunk(input.index) + ']';
                        case "Identifier":
                            var variableName = input.name;
                            if (variablesAdded.indexOf(variableName) === -1 && script) {
                                for (var i = 0; i < script.body.length; i++) {
                                    let scriptLine = script.body[i];
                                    if (scriptLine.variables) {
                                        if (scriptLine.variables[0].name === variableName) {
                                            this.declarations.push('var ' + variableName + ' = ' + chunk(scriptLine.init[0]) + ';');
                                            variablesAdded.push(variableName);
                                            return variableName;
                                        }
                                    }
                                }
                            }
                            return variablesAdded.indexOf(variableName) === -1 && !functionParse ? '"' + variableName + '"' : variableName;
                        case "NumericLiteral": return input.value;
                        case "StringLiteral":
                            if (/^([A-Fa-f0-9]{6})$/.test(input.value)) {
                                return '"#' + input.value + '"';
                            }
                            else {
                                return '"' + input.value + '"';
                            }
                        // function lines
                        case "IfStatement":
                            for (var i = 0; i < input.clauses.length; i++) {
                                arr.push(chunk(input.clauses[i]));
                            }
                            return arr.join("\n");
                        case "IfClause":
                            arr.push("if (" + chunk(input.condition) + "){");
                            for (var i = 0; i < input.body.length; i++) {
                                arr.push("    " + chunk(input.body[i]));
                            }
                            arr.push("  }");
                            return arr.join("\n");
                        case "ElseifClause":
                            arr.push("  else if (" + chunk(input.condition) + "){");
                            for (var i = 0; i < input.body.length; i++) {
                                arr.push("    " + chunk(input.body[i]));
                            }
                            arr.push("  }");
                            return arr.join("\n");
                        case "ElseClause":
                            arr.push("  else{");
                            for (var i = 0; i < input.body.length; i++) {
                                arr.push("    " + chunk(input.body[i]));
                            }
                            arr.push("  }");
                            return arr.join("\n");
                        case "ReturnStatement": return "return " + chunk(input.arguments[0]) + ";";
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
                    if (layer.display.body[0].init[0].name === "n") { continue; }
                    var type = chunk(layer.type);
                    if (type === '"shape"') {
                        var shape = chunk(layer.shape);
                        if (shape === '"Circle"') {
                            if (functionsAdded.indexOf("Circle") === -1) {
                                this.drawFunctions.push(variables.draw.drawCircle);
                                functionsAdded.push("Circle");
                            }
                            var line = 'drawCircle(';
                        }
                        else if (shape === '"Square"') {
                            if (functionsAdded.indexOf("Square") === -1) {
                                this.drawFunctions.push(variables.draw.drawSquare);
                                functionsAdded.push("Square");
                            }
                            var line = 'drawSquare(';
                        }
                        else if (shape === '"Triangle"') {
                            if (functionsAdded.indexOf("Triangle") === -1) {
                                this.drawFunctions.push(variables.draw.drawTriangle);
                                this.drawFunctions.push(variables.util.adjustTriangleHeight);
                                functionsAdded.push("Triangle");
                            }
                            var line = 'drawTriangle(';
                        }
                        else { break; }

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
                        if (shape === '"Triangle"') { h = 'adjustTriangleHeight(' + h + ')' }
                        line += h + ', ';

                        // rotation
                        let rotation = chunk(layer.rotation);
                        line += rotation + ', ';

                        // color
                        let color = "";
                        if (chunk(layer.shader) === '"GradientRadial"') {
                            if (functionsAdded.indexOf("GradientRadial") === -1) {
                                this.drawFunctions.push(variables.draw.drawGradientRadial);
                                functionsAdded.push("GradientRadial");
                            }
                            color = 'drawGradientRadial(';
                            let start = chunk(layer.u_1);
                            color += start + ', ';
                            let end = chunk(layer.u_2);
                            color += end + ', ';
                            let scale = chunk(layer.u_3);
                            color += scale + ', ';
                            let width = w;
                            color += width + ', ';
                            let height = h;
                            color += height + ')';
                        }
                        else if (chunk(layer.shader) === '"GradientLinear"') {
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
                            let width = w;
                            color += width + ', ';
                            let height = h;
                            color += height + ')';
                        }
                        else {
                            color = chunk(layer.color);
                            if(typeof color === 'number') {
                                color = color + '';
                                while (color.length < 6) {
                                    color = '0' + color;
                                }
                                color = '"' + color + '"';
                            }
                        }
                        line += color + ', ';

                        // opacity
                        line += chunk(layer.opacity);
                        
                        if (chunk(layer.shader) === '"Segment"') {
                            line += ", "; 
                            if (functionsAdded.indexOf("Shader") === -1) {
                                this.drawFunctions.push(variables.draw.drawShader);
                                functionsAdded.push("Shader");
                            }
                            if (functionsAdded.indexOf("Segment") === -1) {
                                this.drawFunctions.push(variables.draw.drawSegment);
                                functionsAdded.push("Segment");
                            }
                            // TODO: IMPLEMENT THIS
                        }
                        else if (chunk(layer.shader) === '"SegmentBetween"') {
                            line += ", "; 
                            if (functionsAdded.indexOf("Shader") === -1) {
                                this.drawFunctions.push(variables.draw.drawShader);
                                functionsAdded.push("Shader");
                            }
                            if (functionsAdded.indexOf("Segment") === -1) {
                                this.drawFunctions.push(variables.draw.drawSegment);
                                functionsAdded.push("Segment");
                            }
                            let shader = { name: "Segment" };
                            shader.ang1 = chunk(layer.u_1);
                            shader.ang2 = chunk(layer.u_2);
                            shader.opacity = chunk(layer.u_3);
                            let line2 = "";
                            line2 += line;
                            line2 += `{ name: "Segment", ang1: ${shader.ang1}, ang2: ${shader.ang2}, opacity: ${shader.opacity} });`;
                            drawComponents.lines.push(line2);
                            shader.ang1 = chunk(layer.u_2);
                            shader.ang2 = chunk(layer.u_1);
                            shader.opacity = chunk(layer.u_4);
                            if(shader.opacity === 0) { continue; }
                            line += `{ name: "Segment", ang1: ${shader.ang1}, ang2: ${shader.ang2}, opacity: ${shader.opacity} }`;
                        }
                        line += ');'

                        drawComponents.lines.push(line);
                    }
                    // non-shape layers
                    else if (type === '"markers_hm"') {
                        if (functionsAdded.indexOf("MarkersHM") === -1) {
                            this.drawFunctions.push(variables.draw.drawMarkersHM);
                            functionsAdded.push("MarkersHM");
                        }
                        switch (chunk(layer['m_hour'])) {
                            case '"Circle"':
                                if (functionsAdded.indexOf("Circle") === -1) {
                                    this.drawFunctions.push(variables.draw.drawCircle);
                                    functionsAdded.push("Circle");
                                }
                                break;
                            case '"Triangle"':
                                if (functionsAdded.indexOf("Triangle") === -1) {
                                    this.drawFunctions.push(variables.draw.drawTriangle);
                                    this.drawFunctions.push(variables.util.adjustTriangleHeight);
                                    functionsAdded.push("Triangle");
                                }
                                break;
                            default:
                                if (functionsAdded.indexOf("Square") === -1) {
                                    this.drawFunctions.push(variables.draw.drawSquare);
                                    functionsAdded.push("Square");
                                }
                                break;
                        }
                        switch (chunk(layer['m_minute'])) {
                            case '"Circle"':
                                if (functionsAdded.indexOf("Circle") === -1) {
                                    this.drawFunctions.push(variables.draw.drawCircle);
                                    functionsAdded.push("Circle");
                                }
                                break;
                            case '"Triangle"':
                                if (functionsAdded.indexOf("Triangle") === -1) {
                                    this.drawFunctions.push(variables.draw.drawTriangle);
                                    this.drawFunctions.push(variables.util.adjustTriangleHeight);
                                    functionsAdded.push("Triangle");
                                }
                                break;
                            default:
                                if (functionsAdded.indexOf("Square") === -1) {
                                    this.drawFunctions.push(variables.draw.drawSquare);
                                    functionsAdded.push("Square");
                                }
                                break;
                        }

                        var line = 'drawMarkersHM(';

                        // x-coord of center
                        let x = chunk(layer.x);
                        line += x + ', ';

                        // y-coord of center
                        let y = chunk(layer.y);
                        line += y + ', ';

                        // radius to outer edge of the markers
                        let radius = chunk(layer.radius);
                        line += radius + ', ';

                        // rotation
                        let rotation = chunk(layer.rotation);
                        line += rotation + ', ';

                        // hourMarkers
                        let hourMarkers = chunk(layer['m_hour']);
                        line += hourMarkers + ', ';

                        // minuteMarkers
                        let minuteMarkers = chunk(layer['m_minute']);
                        line += minuteMarkers + ', ';

                        // hourColor
                        let hourColor = chunk(layer.color);
                        line += hourColor + ', ';

                        // minuteColor
                        let minuteColor = chunk(layer.color2);
                        line += minuteColor + ', ';

                        // opacity
                        line += chunk(layer.opacity) + ');'

                        drawComponents.lines.push(line);
                    }
                    else if (type === '"markers"') {
                        if (functionsAdded.indexOf("Markers") === -1) {
                            this.drawFunctions.push(variables.draw.drawMarkers);
                            functionsAdded.push("Markers");
                        }
                        switch (chunk(layer.shape)) {
                            case '"Circle"':
                                if (functionsAdded.indexOf("Circle") === -1) {
                                    this.drawFunctions.push(variables.draw.drawCircle);
                                    functionsAdded.push("Circle");
                                }
                                break;
                            case '"Triangle"':
                                if (functionsAdded.indexOf("Triangle") === -1) {
                                    this.drawFunctions.push(variables.draw.drawTriangle);
                                    this.drawFunctions.push(variables.util.adjustTriangleHeight);
                                    functionsAdded.push("Triangle");
                                }
                                break;
                            case '"Square"':
                                if (functionsAdded.indexOf("Square") === -1) {
                                    this.drawFunctions.push(variables.draw.drawSquare);
                                    functionsAdded.push("Square");
                                }
                                break;
                        }
                        var line = 'drawMarkers(';

                        // x-coord of center
                        let x = chunk(layer.x);
                        line += x + ', ';

                        // y-coord of center
                        let y = chunk(layer.y);
                        line += y + ', ';

                        // width of each marker
                        let w = chunk(layer['m_width']);
                        line += w + ', ';

                        // height of each marker
                        let h = chunk(layer['m_height']);
                        line += h + ', ';

                        // radius to outer edge of the markers
                        let radius = chunk(layer.radius);
                        line += radius + ', ';

                        // rotation
                        let rotation = chunk(layer.rotation);
                        line += rotation + ', ';

                        // count
                        let count = chunk(layer['m_count']);
                        line += count + ', ';

                        // shape
                        let shape = chunk(layer.shape);
                        line += shape + ', ';

                        // color
                        let hourColor = chunk(layer.color);
                        line += hourColor + ', ';

                        // opacity
                        line += chunk(layer.opacity) + ');'

                        drawComponents.lines.push(line);
                    }
                    else if (type === '"image"') {
                        if (functionsAdded.indexOf("Image") === -1) {
                            this.drawFunctions.push(variables.draw.drawTintedImage);
                            this.drawFunctions.push(variables.draw.drawImage);
                            functionsAdded.push("Image");
                        }

                        var image = {};
                        image.path = `"watches/${watchName}/images/${chunk(layer.path.body[0].init[0])}"`;
                        var hasImage = false;
                        this.images.forEach(function (img) {
                            if (img.path === image.path) {
                                hasImage = true;
                                image.name = img.name;
                            }
                        });
                        if (!hasImage) {
                            image.name = `img${this.images.length}`;
                            this.images.push(image);
                        }

                        var line = `drawImage(${image.name}, `;

                        // x-coord of center
                        let x = chunk(layer.x);
                        line += x + ', ';

                        // y-coord of center
                        let y = chunk(layer.y);
                        line += y + ', ';

                        // width of image
                        let w = chunk(layer.width);
                        line += w + ', ';

                        // height of image
                        let h = chunk(layer.height);
                        line += h + ', ';

                        // rotation
                        let rotation = chunk(layer.rotation);
                        line += rotation + ', ';

                        // color
                        let color = chunk(layer.color);
                        line += color + ', ';

                        // opacity
                        line += chunk(layer.opacity) + ');'

                        drawComponents.lines.push(line);
                    }
                    else if (type === '"text"') {
                        if (functionsAdded.indexOf("Text") === -1) {
                            this.drawFunctions.push(variables.draw.drawText);
                            functionsAdded.push("Text");
                        }

                        var line = 'drawText(';

                        // x-coord of center
                        let x = chunk(layer.x);
                        line += x + ', ';

                        // y-coord of center
                        let y = chunk(layer.y);
                        line += y + ', ';

                        // rotation
                        let rotation = chunk(layer.rotation);
                        line += rotation + ', ';

                        // text content
                        let t = chunk(layer.text);
                        line += t + ', ';

                        // text size
                        let ts = chunk(layer.text_size);
                        line += ts + ', ';

                        // font
                        let font = chunk(layer.font) + '';
                        font = font.substring(1, font.length - 1);
                        font = font.split('"').join('');
                        if (this.fonts.indexOf(font) === -1) {
                            this.fonts.push(font);
                        }
                        line += '"' + font + '", ';

                        // color
                        let color = chunk(layer.color);
                        line += color + ', ';

                        // opacity
                        let opacity = chunk(layer.opacity);
                        line += opacity + ')';

                        drawComponents.lines.push(line);

                    }
                    else if (type === '"text_ring"') {
                        if (functionsAdded.indexOf("Numbers") === -1) {
                            this.drawFunctions.push(variables.draw.drawNumbers);
                            functionsAdded.push("Numbers");
                        }

                        var line = 'drawNumbers(';

                        // x-coord of center
                        let x = chunk(layer.x);
                        line += x + ', ';

                        // y-coord of center
                        let y = chunk(layer.y);
                        line += y + ', ';

                        // radius
                        let radius = chunk(layer.radius);
                        line += radius + ', ';

                        // rotation
                        let rotation = chunk(layer.rotation);
                        line += rotation + ', ';

                        // start angle
                        let angStart = chunk(layer.angle_start);
                        line += angStart + ', ';

                        // end angle
                        let angEnd = chunk(layer.angle_end);
                        line += angEnd + ', ';

                        // first and last numbers
                        let numRange = chunk(layer.ring_type.body[0].init[0]) + "";
                        let splitIndex = numRange.indexOf("to") != -1 ? numRange.indexOf("to") : numRange.indexOf("-");
                        let firstNum = numRange.substring(1, splitIndex).trim();
                        let lastNum = numRange.indexOf("to") != -1 ? numRange.substring(splitIndex + 2, numRange.length - 1).trim() : numRange.substring(splitIndex + 1, numRange.length - 1).trim();
                        line += firstNum + ', ' + lastNum + ', ';

                        // show every how many numbers
                        let showEvery = chunk(layer.show_every);
                        line += showEvery + ', ';

                        // hide text
                        let hideText = chunk(layer.hide_text);
                        line += '[' + hideText + '], ';

                        // text rotation
                        let t = chunk(layer.rotated_text);
                        line += t + ', ';

                        // text size
                        let ts = chunk(layer.text_size);
                        line += ts + ', ';

                        // font
                        let font = chunk(layer.font);
                        font = font.substring(1, font.length - 1);
                        font = font.split('"').join('');
                        if (this.fonts.indexOf(font) === -1) {
                            this.fonts.push(font);
                        }
                        line += '"' + font + '", ';

                        // color
                        let color = chunk(layer.color);
                        line += color + ', ';

                        // opacity
                        let opacity = chunk(layer.opacity);
                        line += opacity + ');';

                        drawComponents.lines.push(line);

                    }
                    else {

                    }
                }
                this.drawFunctions.push(drawComponents);

                // comment 
                text += "//This code was generated via the Canvas-Watches tool by Evan Simon Ross\n";
                text += "//More info at https://github.com/evansimonross/Canvas-Watches\n\n";

                // top level declarations 
                for (var i = 0; i < this.declarations.length; i++) {
                    text += this.declarations[i] + "\n";
                }
                text += "\n";
                for (var i = 0; i < this.timeVariables.length; i++) {
                    text += 'var ' + this.timeVariables[i].name + ';\n';
                }
                text += "\n";

                // script function declarations
                for (var i = 0; i < this.scriptFunctions.length; i++) {
                    var f = this.scriptFunctions[i];
                    text += 'function ' + f.name + '(' + f.params + ') {\n';
                    for (var j = 0; j < f.lines.length; j++) {
                        text += '  ' + f.lines[j] + "\n";
                    }
                    text += "}\n\n";
                }

                // image decalarations
                for (var i = 0; i < this.images.length; i++) {
                    text += 'var ' + this.images[i].name + ' = new Image();\n';
                    text += this.images[i].name + '.src = ' + this.images[i].path + ';\n';
                    text += '\n';
                }

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
                text += 'function cutOut() { \n  ctx.save(); \n  ctx.translate(0, 0); \n  ctx.globalCompositeOperation = "destination-in";\n'
                text += '  ctx.beginPath(); \n  ctx.arc(0, 0, radius, 0, 2 * Math.PI); \n  ctx.fill(); \n  ctx.restore(); \n}\n\n'

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
                    if (err) { console.error(err); }
                });

                // fonts
                var css = `:root {
    --bg-color: #aaa;
}

body{
    background-color: var(--bg-color);
}
                
h1{
    font-size: 3em;
    font-weight: 800;
    text-align: center;
    margin: 10px;
}
                
canvas{
    display: block;
    margin-left: auto;
    margin-right: auto;
}
`;

                fs.writeFile('css/style.css', css, (err) => {
                    if (err) { console.error(err); }
                })


                for (var i = 0; i < this.fonts.length; i++) {
                    fs.appendFile('css/style.css',
                        `\n@font-face {\n   font-family: ${this.fonts[i]};\n    src: url('../watches/${watchName}/fonts/${this.fonts[i]}.ttf');\n}\n`,
                        (err) => {
                            if (err) { console.error(err); }
                        });
                }

            }
        }

        // Saves to watch.js for immediate viewability via index.html
        canvasJS.generate('watch.js');

        // Saves as a file unique to the watch name to facilitate multiple conversions.
        fs.createReadStream('watch.js').pipe(fs.createWriteStream(`watches/${watchName}.js`));
    }

    parse();
}

extract(process.argv[2]);