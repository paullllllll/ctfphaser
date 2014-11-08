var http = require('http');
var dgram = require('dgram');
var fs = require('fs');
var url = require("url");

var server = http.createServer( function(req, res){
       res.writeHead(200, 'good');
       
      
       
       console.log(req.url);

       fs.createReadStream('./testgame.html').pipe(res);
       
});


server.listen(8080);