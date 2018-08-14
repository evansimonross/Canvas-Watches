var convert = require('xml-js');
var xmlWatch = require('fs').readFileSync('example.xml','utf8');
var options = { compact: true, ignoreComment: true, alwaysChildren: true };
var jsWatch = convert.xml2js(xmlWatch, options);
console.log(JSON.stringify(jsWatch,null,2));