var port = 7000;

var express = require('express');

var app = express();

var server = app.listen(port);

app.use(express.static('public'));

console.log("server running");

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log(socket.id);
}