const net = require('net');
// const { argv } = require('process');

let zeroPad = number => number < 10 ? `0${number}` : number;

const server = net.createServer((socket) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = zeroPad(date.getMonth() + 1);
    const day = zeroPad(date.getDate());
    const hours = zeroPad(date.getHours());
    const minutes = zeroPad(date.getMinutes());
    const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}\n`;
    socket.end(formattedDate);
})

server.listen(process.argv[2]);

