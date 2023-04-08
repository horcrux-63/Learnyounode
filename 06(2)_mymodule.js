const fs = require('fs');
const path = require('path');



module.exports = (dirPath, extentsion, callback) => {
    ext = '.' + extentsion;
    fs.readdir(dirPath, (err, list) => {
        if(err) return callback(err);

        const filtered = list.filter(file => path.extname(file) === ext);

        return callback(null, filtered);
    });
};
