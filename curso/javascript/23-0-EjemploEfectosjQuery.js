$(document).ready(function(){
	// controla si esta visible o no
	var visto=true;
	// con show() y hide()
	// primero preparo el objeto speed para especificar velocidades
	jQuery.fx.speeds = {
		slow: 800, // si lo ponemos en  cadena '800' se hace el efecto con bucle infinito
		high: 200,
		_default: 400
	}
	// normal
	$('input.normal').on('click',function(){
		if (visto === true){
			$('p').hide();
			visto=false;	
		}
		else{
			$('p').show();
			visto=true;
		}
	});
	// lento
	$('input.lento').on('click',function(){
		if (visto === true){
			$('p').hide('slow',function(){
				console.log("animacion lenta terminada");
			});
			visto=false;	
		}
		else{
			$('p').show('slow',function(){
				console.log("animacion lenta terminada");
			});
			visto=true;
		}
	});
	// rapido
	$('input.rapido').on('click',function(){
		if (visto === true){
			$('p').hide('high');
			visto=false;	
		}
		else{
			$('p').show('high');
			visto=true;
		}
	});

	// con fadeIn() fadeOut()
	$('input.animado').on('click',function(){
		if (visto === true){
			$('p').fadeOut();
			visto=false;	
		}
		else{
			$('p').fadeIn();
			visto=true;
		}
	});

	// con slideUp() slideDown()
	$('input.desplazado').on('click',function(){
		if (visto === true){
			$('p').slideUp();
			visto=false;	
		}
		else{
			$('p').slideDown();
			visto=true;
		}
	});

	// animamos el texto con la funcion animate
	$('p').on({
		'mouseenter': function(){
			$(this).animate({"font-size":"1.5em"});
		}
		,
		'mouseleave': function(){
			$(this).animate({fontSize:"1em"});
		}
	})
})