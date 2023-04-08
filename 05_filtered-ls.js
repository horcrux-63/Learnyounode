const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const fileExtName = '.' + process.argv[3];

fs.readdir(dirPath, (err, list) => {
    if(err){
        console.log(err);
        return;
    }
    list.forEach(file => {
        if(path.extname(file) == fileExtName){
            console.log(file);
        }
    });
});