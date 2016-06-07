$(document).ready(function(){
	console.log("cargada");

	$('input#boton1').on('mousedown',function(){
		$('a#enlace1').css('color','darkgray');
	})
	$('input#boton1').on('mouseup click',function(){
		$('a#enlace1').css('color','darkred');
	})
	$('input#boton1').on('dblclick',function(){
		$('a#enlace1').css('color','darkgreen');
	})

	// $('a#enlace1').on('mouseenter',function(){
	// 	$(this).css('fontSize','1.3em');
	// })
	// $('a#enlace1').on('mouseleave',function(){
	// 	$(this).css('fontSize','1em');
	// })

	$('a#enlace1').on({
		'mouseenter': function(){
	 		$(this).css('fontSize','1.3em');
		}
		,
		'mouseleave': function(){
	 		$(this).css('fontSize','1em');
		}
		,
		'focus':function(){
			$(this).addClass('borde');
		}
		,
		'blur':function(){
			$(this).removeClass('borde');
		}
	})

	$('input#cifrada').on('keypress',function(e){
		console.log("PRESS: " + e.which);
		var tecla = String.fromCharCode(e.which);
		// $('input#planoPress').val($(this).val() + tecla);

		// compartido
		$('input#compartido').val($(this).val() + tecla);
	});
	$('input#cifrada').on('keyup',function(e){
		console.log("UP: " + e.which);
		var tecla = String.fromCharCode(e.which);
		// $('input#planoUp').val($(this).val() + tecla);
		// compartido
		if (e.which == 8 || e.which == 46){
			$('input#compartido').val($(this).val() + tecla);
		}
	});


});