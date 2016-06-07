$(document).ready(function(){
	var objeto = $('div#mueveme');
	var objetoX = 0;
	var objetoY = 0;

	objeto.on('touchmove', function(dedos){
		//console.log("movido");
		if (dedos.originalEvent.touches.length > 0){
			var dedo = dedos.originalEvent.touches[0];
			objetoX = dedo.pageX + "px" ;
			objetoY = dedo.pageY + "px" ;
			var nuevaPos_css = {
				'left' : objetoX,
				'top' : objetoY
			};
			objeto.css(nuevaPos_css);
		}
	});
});