var http = require('http');
var dgram = require('dgram');
var fs = require('fs');

var server = http.createServer( function(req, res){
       
       res.writeHead(200, 'good');
       fs.createReadStream('./testgame.html').pipe(res);
       
       
});

server.listen(8080);