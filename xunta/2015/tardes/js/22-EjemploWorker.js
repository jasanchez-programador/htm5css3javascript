$(document).ready(function(){
	console.log("cargada");
	var worker = new Worker('js/22-workerSMS.js');

	worker.onerror = function(){
		alert("ERROR al crear el WORKER");
	}

	$('#saludar').on('click',function(){
		var sms = $('#main').val();
		sms_json = {
			'cmd' : 'saludar',
			'quien' : sms
		};
		worker.postMessage(sms_json);
	});

	$('#despedir').on('click',function(){
		var sms = $('#main').val();
		sms_json = {
			'cmd' : 'despedir',
			'quien' : sms
		};
		worker.postMessage(sms_json);
	});

	worker.onmessage = function(e){
		$('#worker').val(e.data);
	}
});