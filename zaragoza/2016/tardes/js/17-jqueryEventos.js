$(document).ready(function(){
	console.log("cargada");
	$('input#boton1').on('mousedown',function(){
		$('a').css("color","darkGrey");
	});
	$('input#boton1').on('mouseup click',function(){
		$('a').css("color","darkRed");
	});
	$('input#boton1').on('dblclick',function(){
		$('a').css("color","darkGreen");
	});

	$('a').on({
		'mouseenter': function(){
			$(this).css("fontSize", '1.4em');
		}
		,
		'mouseleave': function(){
			$(this).css("fontSize", '1em');
		}
		,
		'focus': function(){
			$(this).addClass("borde");
		}
		,
		'blur': function(){
			$(this).removeClass("borde");
		}
	});
	$('#cifrada').on('keypress',function(e){
		var letra = String.fromCharCode(e.which);
		$('#plano').val($(this).val() + letra);
		console.log(e.which);
	})
	$('#cifrada').on('keydown',function(e){
		var letra = String.fromCharCode(e.which);
		console.log(e.which);
	})
});