$(document).ready(function(){

	var nuevoP = $("<p>hola mundo</p>").attr('name','miP');
	$("body").append(nuevoP);

	$('<input>').attr({
		'type':'button',
		'value': 'boton',
		'name': 'boton'
	}).insertBefore('p[name=miP]');

	$('p[name=miP]').css('color','darkorange').html("nuevo texto");

	$('p')[0].remove();

	var antP = $('p[name=miP]').detach();
	antP.css({
		'color' : 'Darkorange',
		'background' : 'black'
	});

	$('body').append( $('<h1>').append(antP) );
});