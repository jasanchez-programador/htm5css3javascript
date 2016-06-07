$(document).ready(function(){

	$('#mueveme').on('touchmove',function(dedos){
		if (dedos.originalEvent.changedTouches.length > 0){
			var dedo = dedos.originalEvent.changedTouches[0];
			$(this).css({
				'left': dedo.pageX,
				'top' : dedo.pageY
			});	
		}
	});

	var canvas = $('#canvas');
	var lienzo = canvas[0].getContext('2d');



	canvas.on('touchmove',function(dedos){
		if (dedos.originalEvent.touches.length > 0){
			for (var d=0; d<=dedos.originalEvent.touches.length; d++){
				var dedo = dedos.originalEvent.touches[d];
				var x = dedo.pageX;
				var y = dedo.pageY;
				lienzo.beginPath();
				lienzo.arc(x, y,5,0,360);
				lienzo.fill();
				lienzo.stroke();
			}
		}
	});
});