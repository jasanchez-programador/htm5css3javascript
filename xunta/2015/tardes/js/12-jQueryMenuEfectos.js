$(document).ready(function(){
	$('ul.sub').hide();

	$('li.cabecera').on({
		'mouseenter': function(){
			$(this).animate({"font-size":"20px"});
			$(this).children('ul').fadeIn();
		},
		'mouseleave': function(){
			$(this).animate({"font-size":"15px"});
			$(this).children('ul').fadeOut();
		}
	});
	$('li.submenu').on({
		'mouseenter': function(){
			$(this).animate({"opacity":1.0,"font-size":"20px"});
		},
		'mouseleave': function(){
			$(this).animate({"opacity":0.5,"font-size":"15px"});
		}
	});
});