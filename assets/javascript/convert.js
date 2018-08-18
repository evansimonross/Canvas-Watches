var convert = require('xml-js');
var parser = require('luaparse');
var fs = require('fs');
var variables = require('./variables.js')

var interpret = (lua) => {
    var ast = parser.parse(lua);
    return ast;
}

var getWatchFromXml = (xmlName) => {
    if (xmlName.indexOf('.xml') > -1) {
        xmlName = xmlName.substring(0, xmlName.indexOf('.xml'));
    }
    var xmlWatch = fs.readFileSync('../xml/' + xmlName + '.xml', 'utf8');
    var options = { compact: true, ignoreComment: true, alwaysChildren: true };
    var jsWatch = convert.xml2js(xmlWatch, options);

    // Evaluate lua chunks
    var chunk = (chunk) => {
        var line = "";

        return line;
    }

    // Parse the jsWatch file's layers for displayable content
    var parse = () => {
        var layers = jsWatch.Watch.Layer;
        for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];
            for (attribute in layer['_attributes']) {
                if (layer['_attributes'][attribute].search(/and|or|\{/) > -1) {
                    layer['_attributes'][attribute] = interpret(attribute + '=' + layer['_attributes'][attribute])
                }
            }
        }
        jsWatch.Watch.Layer = layers;

        // create a permanent file with a unique filename for reuse
        fs.writeFile(`${xmlName}.js`, `var watch = ${JSON.stringify(jsWatch, null, 2)}`, (err) => {
            if (err) { console.error(err) }
            console.log('Saved')
        })

        var canvasJS = {
            declarations: ['var math = { rad: function (degrees) { return degrees / 180 * Math.PI; }, sin: function (degrees) { return Math.sin(degrees / 180 * Math.PI); }, cos: function (degrees) { return Math.cos(degrees / 180 * Math.PI); } }',
                'var canvas = document.getElementById("canvas");',
                'var ctx = canvas.getContext("2d");',
                'var radius = canvas.height / 2;',
                'ctx.translate(radius, radius);',
                'setInterval(drawClock, 10);',
                'var now = new Date();',
                'var hour = now.getHours();',
                'var minute = now.getMinutes();',
                'var second = now.getSeconds();',
                'var millisecond = now.getMilliseconds();',
            ],
            drawFunctions: [variables.draw.drawFace],

            generate: function (file) {
                var text = "";
                var functionsAdded = [];

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
                        if (layer.shape === "Triangle") {
                            if (functionsAdded.indexOf("Triangle") === -1) {
                                this.drawFunctions.push(variables.draw.drawTriangle);
                                this.drawFunctions.push(variables.draw.adjustTriangleHeight);
                                functionsAdded.push("Triangle");
                            }

                            var line = 'drawTriangle(';

                            // x-coord of center
                            if (layer.x.type === "Chunk") {
                                console.log('chunk reached')
                                line += '0, '; // TEMP
                            }
                            else { line += layer.x + ', '; }

                            // y-coord of center
                            if (layer.y.type === "Chunk") {
                                console.log('chunk reached')
                                line += '0, '; // TEMP
                            }
                            else { line += layer.y + ', '; }

                            // width of shape
                            if (layer.width.type === "Chunk") {
                                console.log('chunk reached')
                                line += '0, '; // TEMP
                            }
                            else { line += layer.width + ', '; }

                            // height of shape
                            if (layer.height.type === "Chunk") {
                                console.log('chunk reached')
                                line += '0, '; // TEMP
                            }
                            else { line += 'adjustTriangleHeight(' + layer.height + '), '; }

                            // rotation
                            if (layer.rotation.type === "Chunk") {
                                console.log('chunk reached')
                                line += '0, '; // TEMP
                            }
                            else { line += layer.rotation + ', '; }

                            // color
                            if (layer.color.type === "Chunk") {
                                console.log('chunk reached')
                                line += '0, '; // TEMP
                            }
                            else { line += '"#' + layer.color + '");'; }

                            drawComponents.lines.push(line);
                        }
                    }
                }

                this.drawFunctions.push(drawComponents);

                // top level declarations 
                for (var i = 0; i < this.declarations.length; i++) {
                    text += this.declarations[i] + "\n";
                }
                text += "\n";

                // draw clock
                text += 'function drawClock() {\n';
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

getWatchFromXml(process.argv[2]);