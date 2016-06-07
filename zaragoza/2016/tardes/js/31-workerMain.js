$(document).ready(function(){

	var worker = new Worker("js/31-workerWorker.js");

	worker.onerror = function(err){
		alert("ERROR al crear worker: " + err.code +"--"+err.message);
	};

	$('#saludar').on("click",function(){
		var sms = $('#saludo').val();
		var sms_json = {
			'cmd': "saludar",
			'quien': sms
		}

		worker.postMessage(sms_json);
	})
	$('#despedir').on("click",function(){
		var sms = $('#saludo').val();
		var sms_json = {
			'cmd': "despedir",
			'quien': sms
		}

		worker.postMessage(sms_json);
	})

	worker.onmessage = function(resp){
		$('#chat').val(resp.data);

	}

});

