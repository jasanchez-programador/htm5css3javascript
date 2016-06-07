// python -m SimpleHTTPServer 8001

$(document).ready(function(){
	// intento conectarme con el servidor 
	var clienteWS = new WebSocket("ws://localhost:8080/");
	//var soy = clienteWS.url;
	// espero a abrir la conexion
	clienteWS.onopen = function(){
		//console.log("conexion establecida por " + soy );
		// $.each(clienteWS,function(k,v){
		// 	console.log("k: " + k);
		// 	console.log("V: " + v);
		// })
		// envio info
		$('button#saludar').on('click',function(){
			console.log("click");
			var sms = $('input#main').val();
			clienteWS.send(sms);
		});

			// espero respuesta del servidor
		clienteWS.onmessage =function(e) {
			//console.log("Respuesta: " + JSON.stringify(e) + e.origin +  soy.indexOf(e.origin));
			// $.each(e,function(k,v){
			// 	console.log("k: " + k);
			// 	console.log("V: " + v);
			// })
			// if( soy.indexOf(e.origin) >= 0 ){
	  //  			$('input#ws').val(e.data);
	  //  		}
	   		var brdcst_sms = $('#brdcst_ws').val() + "\n" + e.data;
	   		$('#brdcst_ws').val(brdcst_sms);
		};
	};

	
	// al cerrar la conexion
	clienteWS.onclose = function(){
		alert("conexion cerrada");
	}
});