$(document).ready(function(){
	console.log("estoy dentro");

	var clienteWS = new WebSocket("ws://localhost:8080");

	clienteWS.onopen = function(){
		// envio al servidor
		$('#saludar').on('click',function(){
			console.log("enviando!!");
			var sms = $('#saludo').val();
			clienteWS.send(sms);
		});

		// escuchar lo que envie el servidor en cualquier momento
		clienteWS.onmessage = function(sms_srv){
			var chat = $('#chat')
			var chatAntigua = chat.val() + "\n";
			chat.val(chatAntigua + sms_srv.data)
		}
	}

	clienteWS.onclose = function(e){
		alert("conexion cerrada: " + e.code + "--" + e.message);
	}
});