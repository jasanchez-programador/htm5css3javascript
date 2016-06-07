$(document).ready(function(){
	/*
	al pasar por encima buscamos y añadimos clase en css3 que:
	 oscurece el texto
	*/
	$('li.cabecera').on({
		'mouseover':function(e){
			$(this).addClass('oscurecer');
			$(this).children('ul').removeClass('invisible').addClass('visible');
		},
		'mouseleave':function(e){
			$(this).removeClass('oscurecer');
			$(this).children('ul').addClass('invisible').removeClass('visible');
		}
	});
	$('li.submenu').on({
		'mouseover':function(e){
			$(this).removeClass('nooscurecer').addClass('oscurecer');
			$(this).parent('ul').addClass('visible').removeClass('invisible');
		},
		'mouseleave':function(e){
			$(this).addClass('nooscurecer').removeClass('oscurecer');
			$(this).parent('ul').addClass('invisible').removeClass('visible');
		}
	});

});

