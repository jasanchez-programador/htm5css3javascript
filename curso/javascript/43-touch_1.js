$(document).ready(function(){
	// inicializamos coordinadas de referencia
	var x = 0;
	var y = 0;

	// evento lanzado al tocar la pantalla
	$(document).on('touchstart', function(dedos){
		// si hay algun dedo
		if (dedos.originalEvent.touches.length > 0){
			// miramos al primer dedo
			// Almacenamos coordenadas de referencia
			var dedo = dedos.originalEvent.touches[0];
			x = dedo.clientX;
			y = dedo.clientY;
			// Mostramos las coordenadas de referencia
			console.log("Empiezo en: \( " + x + "," + y + "\)");
		}
	});
	
	// evento lanzado mover dedo por la pantalla
	$(document).on('touchmove', function(dedos){
		// inicializamos variables que contendran
		// las coordenadas al movernos
		var movX = "";
		var movY = "";
		// si hay algun dedo todavia
		if (dedos.originalEvent.targetTouches.length > 0){
			// miramos al primer dedo
			// calculamos hacia donde se mueve
			var dedo = dedos.originalEvent.targetTouches[0];
			var nuevaX = x - dedo.clientX;
			var nuevaY = y - dedo.clientY;
			// hacia donde se movio en horizontal
			// sensibilidad de 10px
			if (nuevaX > 10){
				movX = "izquierda";
			}else{
				if (nuevaX < -10){
					movX = "derecha";
				}else{
					movX = "centro";
				}
			}
			// hacia donde se movio en vertical
			// sensibilidad de 10px
			if (nuevaY > 10){
				movY = "arriba";
			}else{
				if (nuevaY < -10){
					movY = "abajo";
				}else{
					movY = "centro";
				}
			}
 			console.log("Me he movido hacia: " + movX + " y " + movY);
		}
	});
	
	// evento lanzado dejar de tocar la pantalla
	$(document).on('touchend', function(dedos){
		// Del dedo que solto, donde se quedo
		if (dedos.originalEvent.changedTouches.length > 0){
			var dedo = dedos.originalEvent.changedTouches[0];
			x = dedo.clientX;
			y = dedo.clientY;
			console.log("Acabo en: \( " + x + "," + y + "\)");
		}
	});
});