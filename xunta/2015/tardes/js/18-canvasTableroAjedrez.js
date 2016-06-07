$(document).ready(function(){
	var lienzo = $('canvas#tablero');
	var tablero = lienzo[0].getContext('2d');

	var color1 = true;

	for (var x=1; x<=8; x++){
		tablero.fillStyle = "Black";
		tablero.font = "bold 25px Arial";
		tablero.fillText(x, x * 50 + 25 , 25 );
		tablero.fillText(x, 25, x * 50 + 25);
		color1 = !color1;

/*		tablero.fillStyle = "ligthgrey";
		tablero.fillRect(50,50,50,50);
		tablero.fillStyle = "darkOrange";
		tablero.fillRect(100,100,50,50);*/
		for (var y=1; y<=8; y++){
			if (color1){
				console.log("entro if");
				tablero.fillStyle = "DarkOrange";
				//color1 = true;
			}
			else {
				console.log("entro else");
				tablero.fillStyle = "lightgrey";
				//color1 = false;	
			}
			color1 = !color1;
			tablero.fillRect( x * 50 ,y * 50 ,50 ,50);
		}
	}


});