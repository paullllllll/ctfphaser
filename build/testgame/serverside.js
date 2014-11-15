
var fs = require('fs');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendfile('testgame.html');
});
       
app.get('/'+http.req.url, function(req,res){
       
       res.sendfile('.'+http.req.url);
       
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);

});