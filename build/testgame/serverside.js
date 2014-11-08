var http = require('http');
var dgram = require('dgram');
var fs = require('fs');
var url = require("url");

var server = http.createServer( function(req, res){
       res.writeHead(200, 'good');
       
       console.log(req.url.toString()+'work');
              
       fs.createReadStream('./testgame.html').pipe(res);
       
       fs.createReadStream(req.url).pipe(res);
              
       
       
});

console.log('hi');

server.listen(8080);