
const fs = require('fs');

const buff = fs.readFileSync(process.argv[2]);
const s = buff.toString().split('\n');

console.log(s.length-1);