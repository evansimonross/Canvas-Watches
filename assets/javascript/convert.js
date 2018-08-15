var convert = require('xml-js');
var parser = require('luaparse');
var fs = require('fs');

var xmlWatch = require('fs').readFileSync('example.xml', 'utf8');
var options = { compact: true, ignoreComment: true, alwaysChildren: true };
var jsWatch = convert.xml2js(xmlWatch, options);

var interpret = (lua) => {
    var ast = parser.parse(lua);
    return ast;
}

var parse = () => {
    var layers = jsWatch.Watch.Layer;
    for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        for (attribute in layer['_attributes']) {
            if (layer['_attributes'][attribute].search(/\+|\-|\*|\/|\<|\>|\=/) > -1) {
                layer['_attributes'][attribute] = interpret(attribute + '=' + layer['_attributes'][attribute])
            }
        }
    }
    jsWatch.Watch.Layer = layers;
    fs.writeFile('example.js', 'var watch = ' + JSON.stringify(jsWatch, null, 2), (err) => {
        if (err) { console.error(err) }
        console.log('Saved')
    })
}

parse()