$(document).ready(function(){
	console.log("estoy dentro");

	var clienteWS = new WebSocket("ws://localhost:8080/");

	clienteWS.onopen = function(){
		console.log("Soy: " + clienteWS.url);
		$('#enviar').on('click',function(){
			console.log("click");
			var sms = $('#saludo').val();
			clienteWS.send(sms);
		});
		clienteWS.onmessage = function(s){
			var valAnt = $('#respuesta').val();
			var valNuevo = valAnt +"\n"+s.data;
			$('#respuesta').val(valNuevo);

		}
	}
	clienteWS.onclose = function(err){
		alert("Conexión Cerrada desde servidor: "+ err.code +"--"+ err.message);
	}
})