var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var usr = 0

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  usr++;

  console.log(usr+' user connected');
  socket.on('msg',function(msg){
  	io.emit("get_msg",msg)
  })
   socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
