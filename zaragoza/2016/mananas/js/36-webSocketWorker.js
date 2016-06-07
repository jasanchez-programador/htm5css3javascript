$(document).ready(function(){

	var worker = new Worker("js/36-webSocketWorkerWorker.js");

	worker.onerror = function(err){
		alert("ERROR: " + err.code+"--" + err.message);
	};

	$('#enviar').on('click',function(){
		console.log("click!!");
		var sms = $('#saludo').val();
		worker.postMessage(sms);
	});

	worker.onmessage = function(sms_resp){
		var valAnt = $('#respuesta').val();
		var valNuevo = valAnt +"\n"+sms_resp.data;
		$('#respuesta').val(valNuevo);
	}
});