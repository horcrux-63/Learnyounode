const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if(err) throw err;
    const s = data.split('\n');
    console.log(s.length-1);
});