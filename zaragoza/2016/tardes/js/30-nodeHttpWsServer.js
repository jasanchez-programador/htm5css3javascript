// # npm install websocket

// ejecutar
// $ node 30-nodeHttpServer.js

var webSocket = require('websocket').server;
var http = require('http');

var servidorHttp = http.createServer(function(request,response){}).listen(8080);
var servidorWebSocket = new webSocket({
	httpServer: servidorHttp
});

var clientes = [];

servidorWebSocket.on('request', function(request){
	var cliente = request.accept();
	clientes.push(cliente);

	console.log( (new Date()) + " -- Conexion Establecida!!");
	cliente.on('message',function(sms){
		console.log("Mensaje Recibido " + sms.utf8Data);

		for (var c=0; c<clientes.length; c++){
			clientes[c].sendUTF("HOLA: "+ sms.utf8Data)
		}

	})


})
