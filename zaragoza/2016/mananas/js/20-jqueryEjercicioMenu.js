$(document).ready(function(){
	console.log("cargada");
	$('li.cabecera').on({
		'mouseover':function(){
			// $(this).addClass('oscurecer');
			$(this).children('ul').removeClass('invisible');
		}
		,
		'mouseleave':function(){
			// $(this).removeClass('oscurecer');
			$(this).children('ul').addClass('invisible');

		}
	});
	$('li.submenu').on({
		'mouseover':function(){
			$(this).addClass('oscurecer');
			// $(this).children('ul').removeClass('invisible');
		}
		,
		'mouseleave':function(){
			$(this).removeClass('oscurecer');
			// $(this).children('ul').addClass('invisible');

		}
	});

})