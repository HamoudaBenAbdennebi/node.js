const fs = require("fs");
let text= fs.readFileSync(process.argv[2],'utf-8')

let lines = text.split("\n").length-1;  

console.log(lines)