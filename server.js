// const http = require('http');

// const hostname = '127.0.0.1';

// const port = 3000;

// const server = http.createServer(function(req, res){
//      res.statusCode = 200;
//      res.setHeader('Content-Type', 'text/html');
//      res.write('<h1>This is not the way to go</h1>');
//      res.end();
// });

// server.listen(port, hostname, function(){
//     console.log(`servern kører på http:// ${hostname}:${port}`);
// });

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const router = require('./controller/routesController');

http.createServer(function (req, res) {
    router.init(req, res);
}).listen(port, hostname);

console.log(`serveren kører på http://${hostname}:${port}/`);