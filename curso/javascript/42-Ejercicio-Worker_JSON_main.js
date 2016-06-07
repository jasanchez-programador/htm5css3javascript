
$(document).ready(function(){
	// instanciamos worker
	var worker = new Worker('//localhost:8000/Documentos/MisCursos/HTML5_CSS_JavaScript-moviles/curso/javascript/42-Ejercicio_Worker_JSON.js');
	// Ver por consola si hay errores
	worker.onerror = function(e){
		console.log("ERROR del WORKER");
	};
	// Leemos lo introducido por el usuario en la caja de texto y
	// al hacer click en Saludar le enviamos Hola al worker
	$('button#saludar').on('click',function(){
		var sms_hola = $('input#main').val();
		var sms_json = {
			'cmd' : 'saludar',
			'quien' : sms_hola
		};
		worker.postMessage(sms_json);
	});
	// Leemos lo introducido por el usuario en la caja de texto y
	// al hacer click en Despedir le enviamos Hola al worker
	$('button#despedir').on('click',function(){
		var sms_adios = $('input#main').val();
		var sms_json = {
			'cmd' :	'despido',
			'quien' : sms_adios
		};
		worker.postMessage(sms_json);
	});
	// Escuchamos lo que nos devuelve el worker
	worker.onmessage =function(e) {
    	$('input#worker').val(e.data);
	};
});