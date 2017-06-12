var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
	res.sendfile('index.html');
});

var nsp = io.of('/my-namespace');
nsp.on('connection',function(socket){
	console.log("User "+ socket.id +  " connected");
	nsp.emit('hi','Welcome');
	nsp.emit('hi','Hello everyone my id is :' + socket.id);
});


http.listen(3000,function(){
	console.log('listening on port:3000');
});
