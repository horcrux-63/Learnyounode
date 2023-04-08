const http = require('http');

const urls = [];

urls.push(process.argv[2]);
urls.push(process.argv[3]);
urls.push(process.argv[4]);

const results = [];

function GetDone(index){
    http.get(urls[index], (response) => {
        response.on('error', (err) => console.error(err));

        let R = '';

        response.on('data', (data) => {
            R += data.toString();
        });

        response.on('end', (end) => {
            results[index] = R;
            if(results.length == 3){
                results.forEach(data => {
                    console.log(data);
                })
            }
        });

    })
}

urls.forEach((url, index) => {
    GetDone(index);
})