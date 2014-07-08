var nodejsWebSocket = require('nodejs-websocket');

var socketServer = nodejsWebSocket.createServer(function(con){
	console.log("A new connection is established");
	con.on("text",function(msg){
		socketServer.connections.forEach(function(c){
			c.sendText(msg);
		});
	});
});
socketServer.listen(9090);
console.log("Socket server is listening on port 9090");