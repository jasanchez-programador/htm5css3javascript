$(document).ready(function(){
	console.log("pagina cargada");
	// al pulsar el boton, pongo texto de <a> de color Gris
	$('input#boton1').on("mousedown",function(){
		$('a#enlace1').css({'color':'DarkGrey'});
	});
	// El texto de <a> lo pongo rojo tanto si se lanza
	// click como al dejar de pinchar (mouseup)
	$('input#boton1').on("click mouseup",function(){
		$('a#enlace1').css({'color':'Red'});
	});
	// al pulsar 2 veces, pongo texto de <a> de color verde
	$('input#boton1').on("dblclick",function(){
		$('a#enlace1').css({'color':'Green'});
	});
	// Simular hover:
	// al poner el raton encima de <a> ampliamos letra del texto
	// al salir el raton de encima de <a> reducimos letra del texto
	$('a#enlace1').on({
		'mouseenter':function(){
			$(this).css({
				'color':$(this).css('color'),
				'font-size': '1.5em'
			});
		}
	,
		'mouseleave':function(){
			$(this).css({
				'color':$(this).css('color'),
				'font-size': '1em'
			});
		}
	});
	// al coger foco añadir clase foco
	$('a').on('focus',function(){
		$(this).addClass('foco');
	});
	// al perder el foco quitar la clase foco
	$('a').on('blur',function(){
		$(this).removeClass('foco');
	})

	var tecla = null;
	$('#cifrada').on("keypress",function(e){
	// si la tecla es mayuscula se deja mayuscula
		if ( e.which >= 65 && e.which <= 96 || e.which === 209){
			tecla = String.fromCharCode(e.which);					
		}
		// sino es mayuscula se pasa a minuscula
		else {
			tecla = String.fromCharCode(e.which).toLowerCase();
		}
		$('#plano').val($('#plano').val() + tecla);
	});

	$('a#enlace2').on('click',function(e){
		e.preventDefault();
		console.log("no sigo el enlace");
	});
})