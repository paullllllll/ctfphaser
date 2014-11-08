var http = require('http');
var dgram = require('dgram');
var fs = require('fs');
var first = true;
var server = http.createServer( function(req, res){
       res.writeHead(200, 'good');
       if(first){
              
              fs.createReadStream('./testgame.html').pipe(res);
              first=false;
       }
       else{
              
              fs.createReadStream(req.url).pipe(res);
              
       }
       
});

server.listen(8080);