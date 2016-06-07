$(document).ready(function(){
	console.log("cargadda");
	var x = 0;
	var y = 0;

	$(document).on('touchstart', function(dedos){
		if (dedos.originalEvent.touches.length > 0){
			var dedo = dedos.originalEvent.touches[0];
			x = dedo.clientX;
			y = dedo.clientY;

			console.log("Coordenadas de inicio (" + x + "," + y + ")");
		}
	});

	$(document).on('touchmove',function(dedos){
		var movX = "";
		var movY = "";

		if ( dedos.originalEvent.changedTouches.length > 0){
			var dedo = dedos.originalEvent.changedTouches[0];
			var nuevaX = x - dedo.clientX;
			var nuevaY = y - dedo.clientY;
		}

		if (nuevaX > 10){
			movX = "izquierda";
		}
		else{
			if (nuevaX < -10){
				movX = "derecha";
			}
			else {
				movX = "centro";
			}
		}

		if (nuevaY > 10){
			movY = "arriba";
		}
		else{
			if (nuevaY < -10){
				movY = "abajo";
			}
			else {
				movY = "centro";
			}
		}

		console.log("movido a (" + movX + "," + movY + ")");
	});


});