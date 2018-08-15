var convert = require('xml-js');
var parser = require('luaparse');
var fs = require('fs');

var interpret = (lua) => {
    var ast = parser.parse(lua);
    return ast;
}

var getWatchFromXml = (xmlName) => {
    if(xmlName.indexOf('.xml')>-1){
        xmlName = xmlName.substring(0,xmlName.indexOf('.xml'));
    }
    var xmlWatch = fs.readFileSync('../xml/' + xmlName + '.xml', 'utf8');
    var options = { compact: true, ignoreComment: true, alwaysChildren: true };
    var jsWatch = convert.xml2js(xmlWatch, options);

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

        // create a permanent file with a unique filename for reuse
        fs.writeFile(`${xmlName}.js`, `var watch = ${JSON.stringify(jsWatch, null, 2)}`, (err) => {
            if (err) { console.error(err) }
            console.log('Saved')
        })

        // write to the 'watch' file as well for the display module to show it
        fs.writeFile('watch.js', `var watch = ${JSON.stringify(jsWatch, null, 2)}`, (err) => {
            if (err) { console.error(err) }
            console.log('Saved')
        })
    }

    parse();
}

getWatchFromXml(process.argv[2]);