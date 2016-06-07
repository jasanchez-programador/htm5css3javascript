$(document).ready(function(){

	var worker = new Worker("js/35-workerWorker.js");

	worker.onerror = function(err){
		alert("ERROR: " + err.code+"--" + err.message);
	};

	$('#enviar').on('click',function(){
		console.log("click!!");
		var sms = $('#saludo').val();

		worker.postMessage(sms);
	});

	worker.onmessage = function(sms_resp){
		console.log("respuesta: " + sms_resp.data);
		$('#respuesta').val(sms_resp.data);
	}
});