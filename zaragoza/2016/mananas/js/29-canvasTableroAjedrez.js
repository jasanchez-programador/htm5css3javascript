window.onload = function(){
	console.log("estoy dentro");
	var tablero = document.getElementById("tablero").getContext("2d");

	var naranja = false;
	for(var i=1; i<=8; i++){
		tablero.fillStyle="black";
		tablero.font="20px Arial"
		tablero.fillText(i,i*60+30,30);
		tablero.fillText(i,30,i*60+30);
		
		tablero.fillStyle="darkOrange";

		naranja = !naranja;

		for (var j=1;j<=8;j++){
			if (naranja){
				tablero.fillStyle="darkGray";
				naranja = false;
			}
			else{
				tablero.fillStyle="darkOrange";
				naranja = true;
			}
			tablero.fillRect(i*60,j*60,60,60);
		}
	}
}