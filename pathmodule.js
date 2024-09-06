const path = require("path")

const a1 = path.basename('C:\\temp\\myfile.html');
console.log(a1);
const a2 = path.dirname('/foo/bar/baz/asdf/quux');
console.log(a2);
const a3 = path.extname('index.coffee.md');
console.log(a3);