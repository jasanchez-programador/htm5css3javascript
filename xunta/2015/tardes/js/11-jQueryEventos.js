$(document).ready(function(){
	$('#boton1').on('mousedown',function(){
		$('#enlace1').css('color','darkgrey');
	});
	
	$('#boton1').on('click mouseup',function(){
		$('#enlace1').css('color','red');
	});
	$('#boton1').on('dblclick',function(){
		$('#enlace1').css('color','darkGreen');
	});

	$('#enlace1').on({
		'mouseover' : function(){
			$(this).css({
				'color' : $(this).css('color'),
				'font-size' : '26px'
			});
		}
		,
		'mouseleave' : function(){
			$(this).css({
				'color' : $(this).css('color'),
				'font-size' : '16px'
			});
		}
	});
});