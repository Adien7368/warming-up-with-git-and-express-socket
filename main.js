var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
	res.sendfile('index.html');
});
var clients = 0;
io.on('connection',function(socket){
	clients++;
	console.log('A user connected : ' + socket.id);

	io.sockets.emit('broadcast',{description: clients + ' clients connected'});

	socket.on('disconnect',function(){
		io.sockets.emit('broadcast',{description: clients-1 + ' clients connected'});
		clients--;
		console.log('A user disconnected : '+socket.id);
	});
});

http.listen(3000,function(){
	console.log('listening on port:3000');
});
