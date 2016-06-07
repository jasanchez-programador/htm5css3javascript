// instalar modulo de websocket para el servidor
// npm install websocket

// para ejecutarlo
// node WebSockets1_servidor.js

// Importamos de node el websocket y el servidor http
var webSocket = require('websocket').server;
var http = require('http');

// levantamos servidor en el puerto 8080
// var servidorHttp = http.createServer(function(request, response) {
// //    console.log((new Date()) + ' Received request for ' + request.url);
//     response.writeHead(404);
//     response.end();
// });
// server.listen(8080);
var servidorHttp = http.createServer(function(){}).listen(8080);
 
// instanciamos el servidor de ws
var servidorWebSocket = new webSocket({
    httpServer: servidorHttp,
    autoAcceptConnections: false // no hace falta!!!
});

var clientes =[];
servidorWebSocket.on('request', function(request) {
    var cliente = request.accept();
    clientes.push(cliente);
    // console.log(clientes.length);
    //var cliente = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Conexion Aceptada!!');
    cliente.on('message', function(mensaje) {
    	/*
			recibimos estructura en mensaje si era un String
			{"type":"utf8","utf8Data":"julio"}
    	*/
        console.log('Mensaje Recivido: ' + mensaje.utf8Data);
        // respuesta al cliente
        for (var c=0; c<clientes.length;c++){
        	clientes[c].sendUTF("hola " + mensaje.utf8Data);
        	// envio directo del servidor 5 segundos despues
    //     	setTimeout(function(){
				// clientes[c].sendUTF("Enviado desde el servidor " + mensaje.utf8Data);
				// },5000);
         }

    });

	cliente.on('close', function(reasonCode, description) {
	    console.log((new Date()) + ' Peer ' + cliente.remoteAddress + ' disconnected.');
	});
});
