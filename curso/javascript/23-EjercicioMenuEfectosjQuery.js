$(document).ready(function(){
	$('li.cabecera').children('ul').hide();

	$('li.cabecera').on({
		'mouseover': function(){
			$(this).animate({"font-size":"1.3em"});
			$(this).children('ul').fadeIn();
		},
		'mouseleave': function(){
			$(this).animate({"font-size":"1.1em"});
			$(this).children('ul').fadeOut();
		}
	});
	$('li.submenu').on({
		'mouseover': function(){
			$(this).animate({"opacity":1.0,"font-size":"1.3em"});
		},
		'mouseleave': function(){
			$(this).animate({"opacity":0.5,"font-size":"1.1em"});
		}
	});
});