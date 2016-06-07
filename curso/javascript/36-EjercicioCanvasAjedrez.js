$(document).ready(function(){
	// establecemos contexto
	var tablero = $('canvas#tablero');
	var contextoTablero = tablero[0].getContext('2d');

	// para los colores alternos
	var color = true;
	// texto de inicio
	var texto = "Ajedrez con canvas";
	contextoTablero.fillStyle = "DarkRed";
	contextoTablero.font = "30px Arial";
	contextoTablero.fillText(texto, 195, 50);
	contextoTablero.font = "20px Arial";

	// pintar los numeros arriba y derecha
	for (i=1; i<=8; i++){
		color = !color;
		texto = i;
		contextoTablero.fillStyle = "Black";
		contextoTablero.fillText(texto, 50 + i*60, 95);
		contextoTablero.fillText(texto, 40, 85 + i * 60);
		// Pintar los cuadrados de 2 colores
		for (j=1; j<=8; j++){
			if (color) {
				contextoTablero.fillStyle = "lightgrey";
				color = false;
			}
			else{
				contextoTablero.fillStyle = "darkorange";
				color = true;	
			}
			contextoTablero.fillRect(20+i*60, 50+j*60, 60, 60);
		}
	}
});