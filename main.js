var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
	res.sendfile('index.html');
});

io.on('connection',function(socket){
	console.log("User " + socket.id + " connectd");

	socket.on('requ',function(data){

		console.log(data);
		io.emit('chat',data);
	});
	socket.on('disconnect',function(){
		console.log('A user dissconnect');
	});
});



http.listen(3000,function(){
	console.log('listening on port:3000');
});
