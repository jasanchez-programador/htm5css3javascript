$(document).ready(function(){
	// instanciamos worker
	var worker = new Worker('//localhost:8000/Documentos/MisCursos/HTML5_CSS_JavaScript-moviles/curso/javascript/41-Worker_PostMessage.js');
	// Ver por consola si hay errores
	worker.onerror = function(e){
		console.log("ERROR del WORKER");
	};
	// Leemos lo introducido por el usuario en la caja de texto y
	// al hacer click en el boton y se lo enviamos mensajes al worker
	$('button#saludar').on('click',function(){
		var sms = $('input#main').val();
		worker.postMessage(sms);
	});
	// Escuchamos lo que nos devuelve el worker
	worker.onmessage =function(e) {
    	$('input#worker').val(e.data);
	};
});