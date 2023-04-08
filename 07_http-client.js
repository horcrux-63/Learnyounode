const https = require('http');

const url = process.argv[2];

https.get(url, (response) => {
    response.on('error', (err) => console.err(err));
    response.on('data', (data) => {
        console.log(data.toString());
    });
})