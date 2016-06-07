$(document).ready(function(){
	$('li.cabecera').on({
		'mouseenter': function(){
			$(this).addClass('oscurecer');
			
			$(this).children('ul').removeClass('invisible');
			$(this).children('ul').addClass('visible');
		},
		'mouseleave': function(){
			$(this).removeClass('oscurecer')
			
			$(this).children('ul').addClass('invisible');
			$(this).children('ul').removeClass('visible');
		}
	});
	$('li.submenu').on({
		'mouseenter': function(){
			$(this).addClass('oscurecer');
			$(this).removeClass('nooscurecer');
			
			$(this).parent('ul').removeClass('invisible');
			$(this).parent('ul').addClass('visible');
		},
		'mouseleave': function(){
			$(this).removeClass('oscurecer')
			$(this).addClass('nooscurecer')
		
			$(this).parent('ul').addClass('invisible');
			$(this).parent('ul').removeClass('visible');
		}
	});
});