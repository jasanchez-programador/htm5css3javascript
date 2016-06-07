//$(window).on('load',function(){
$(document).ready(function(){
	console.log("pagina cargada");
	// Añadimos nuevo parrafo a la pagina
/*	// PRIMERO: Creo elemento <p>
	var nuevoP = $("<p>hola mundo<p>");
	// SEGUNDO: Añadimos atributo <p name='miP'>
	nuevoP.attr('name','miP');
	// TERCERO: Añadimos parrafo al final del <body>
	$('body').append(nuevoP);
*/  
	// Lo mismo pero en una linea
	$('body').append($("<p>hola mundo</p>").attr({
		'name': 'miP',
		'id': 'p'
	}));
	// Añadimos boton entre los 2 parrafos
	// PRIMERO: Creo <input> 
	// SEGUNDO: le doy atributos para ser boton
	// TERCERO: lo inserto antes de mi Parrafo
	$('<input>').attr({
		'type': 'button',
		'name': 'boton',
		'value': 'boton',
	}).insertBefore('p[name=miP]');
	// Modificamos el parrafo insertado
	// PRIMERO: cambiamos el texto
	// SEGUNDO: modificamos estilo para ponerle color naranja a la letra
	$('p[name=miP]').html("nuevo texto").css('color','DarkOrange');
	//Quitamos el parrafo inicial
	$('body > p:first').remove();
	//Sobre el parrafo
	// PRIMERO: le incluimos una cabezera <h1>
	// lo desattachamos para añadirlo despues dentro de <h1> 
	var antiguoP = $('p[name=miP]').detach();
	$('body').append(
		$("<h1>").append(antiguoP)
		);
	// SEGUNDO: Actualizamos el estilo del parrafo
	// poniendo de color de fondo el negro
	$('p[name=miP]').css({
		'background-color': 'Black'
	});
});
