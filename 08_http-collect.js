const http = require('http');

const urls = [];

urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);

function GetDone(url){
    http.get(url, (response) => {
        response.on('error', (err) => console.error(err));
        let R = '';

        response.on('data', (data) => {
            R += data.toString();
        });

        response.on('end', (end) => {
            console.log(R);
        });

    })
}

urls.forEach(val => {
    GetDone(val);
})