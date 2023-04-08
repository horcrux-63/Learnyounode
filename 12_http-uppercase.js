const http = require('http');

const port = process.argv[2];

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    let body = '';
    request.on('data', (chunk) => {
      body += chunk;
    });
    request.on('end', () => {
      const upperCaseBody = body.toUpperCase();
      response.write(upperCaseBody);
      response.end();
    });
  } else {
    response.statusCode = 404;
    response.end();
  }
});

server.listen(port, () => {
  console.log(port);
});
