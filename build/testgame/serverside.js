var http = require('http');
var dgram = require('dgram');
var fs = require('fs');
var url = require("url");
var ipware = require('ipware');


var server = http.createServer( function(req, res){
       res.writeHead(200, 'good');
       
      
       
       console.log(req.url);
       if( req.url =='/'){
              fs.createReadStream('./testgame.html').pipe(res);
       }
       else {
       
              fs.createReadStream('.'+req.url).pipe(res);
              
       }
       
       
});

var socket = dgram.createSocket('udp4');


server.listen(8080);