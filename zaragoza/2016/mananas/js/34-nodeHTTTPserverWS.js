// sudo npm install websocket

// node 34-nodeHTTPserverWS.js

var WebSocketServer = require('websocket').server;
var http = require('http');

console.log("llego1");

var httpServer = http.createServer(function(request,response){
	console.log( (new Date()) + "Recibida Peticion de cliente: " + request.url);
	response.writeHead(404);
	response.end();
});
httpServer.listen(8080);

console.log("llego2");
var wsServer = new WebSocketServer({
	httpServer: httpServer
});

console.log("llego3");
var clientes = [];

// MAL
// wsServer.onrequest = function(request){
wsServer.on('request', function(request){
	var cliente = request.accept();
	clientes.push(cliente);

	console.log( (new Date()) +  cliente + " conexion aceptada!!!");

	cliente.on('message',function(sms){
		console.log("SMS recibido: " + sms.utf8Data);

		for (var c=0; c<clientes.length; c++){
			clientes[c].sendUTF("HOLA: " + sms.utf8Data)
		}
	});

	cliente.on('close',function(){
		console.log( (new Date()) + cliente.remoteAddress + " Desconectado");
	});
});

