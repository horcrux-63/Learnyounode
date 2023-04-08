
const func = require('./mymodule.js');

const dirPath = process.argv[2];
const extentsion = process.argv[3];

func(dirPath, extentsion, (err, filteredList) => {
    if(err) return console.log(err);
    filteredList.forEach(file => {
        console.log(file);
    });
});

// console.log(10);





