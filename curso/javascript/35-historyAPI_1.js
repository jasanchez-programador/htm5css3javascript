
$(document).ready(function(){
	// Cada vez que cargamos la página
	console.log("Pagina Recargada");
	console.log("historico actual guardado: " + window.history.length++);
	// Evento que se ejecuta al incluir una nueva página al historico
	// Guarda objeto --> StateObj con el contenido de la página
	window.onpopstate = function(event) {
		$('body').append($("<p class='col-md-12 text-warning bg-danger'>"+ event.state.sms + "</p>"));
	};
	// movernos por el historico
	$('input#atras').on('click',function(){
		window.history.back();
	});
	$('input#alante').on('click',function(){
		window.history.forward();
	});
	// modificar el historico 
	$('input#pushState').on('click',function(){
		var stateObj = { sms: "historico actualizado con pushState" };
		window.history.pushState(stateObj, "hago que voy a pagina 3", "35-historyAPI_3.html");
	});
	$('input#replaceState').on('click',function(){
		var stateObj = { sms: "historico actualizado con replaceState" };
		window.history.replaceState(stateObj, "hago que voy a pagina 3", "35-historyAPI_3.html");
	});
});