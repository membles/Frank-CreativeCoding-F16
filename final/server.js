var port = 7000;

var express = require('express');

var app = express();

var server = app.listen(port);

app.use(express.static('public'));

console.log("The server is running");

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
	socket.on('avatar', userData);
	socket.on('projectile', projData);

	function userData(data){
		socket.broadcast.emit('avatar', data);
	}

	function projData(data){
		socket.broadcast.emit('projectile', data);
	}
}