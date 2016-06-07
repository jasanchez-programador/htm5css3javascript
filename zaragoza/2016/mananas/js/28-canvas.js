window.onload = function(){
	console.log("cargado");
	var elemento = document.getElementById("lienzo1");
	var miLienzo = elemento.getContext('2d');

	miLienzo.fillRect(1,1,80,40);
	miLienzo.strokeRect(100,1,80,40);
	miLienzo.clearRect(50,0,80,40);

	var elemento2 = document.getElementById("lienzo2");
	var miLienzo2 = elemento2.getContext('2d');
	miLienzo2.globalAlpha="1";
	miLienzo2.fillStyle="red";
	miLienzo2.strokeStyle="blue";
	miLienzo2.strokeRect(1,1,80,40);
	miLienzo2.fillRect(3,3,75,35);

	//var gradiente = miLienzo2.createLinearGradient(75,190,1,90,50,100);
	var gradiente = miLienzo2.createRadialGradient(1,1,30,75,50,25,100,50,15);
	gradiente.addColorStop(0.25,"gold");
	gradiente.addColorStop(0.75,"lightblue");
	gradiente.addColorStop(1,"darkOrange");

	miLienzo2.fillStyle=gradiente;
	miLienzo2.fillRect(1,1,120,120);

	// cuadrado
	miLienzo2.beginPath();
	miLienzo2.moveTo(150,100);
	miLienzo2.lineTo(150,150);
	miLienzo2.lineTo(200,150);
	miLienzo2.lineTo(200,100);
	miLienzo2.lineTo(150,100);
	miLienzo2.stroke();
	miLienzo2.fill();
	miLienzo2.closePath();

	//circulo
	miLienzo2.beginPath();
//	miLienzo2.arc(60,120,40,0,360);
	miLienzo2.arc(60,120,30,Math.PI,Math.PI*2,true);
	miLienzo2.stroke();	
	miLienzo2.fill();
	miLienzo2.closePath();

	// tablero de 3 en raya

	var elemento3 = document.getElementById("lienzo3");
	var miLienzo3 = elemento3.getContext("2d");

	miLienzo3.beginPath();

	for( var p=5; p<=65; p+=20 ){
		miLienzo3.moveTo(p,5);
		miLienzo3.lineTo(p,65);
		miLienzo3.moveTo(5,p);
		miLienzo3.lineTo(65,p);
	}

	miLienzo3.stroke();
	miLienzo3.closePath();


	// subrayar y luego escribir encima
	miLienzo3.beginPath();
	miLienzo3.strokeStyle="orange";
	miLienzo3.lineWidth=20;
	miLienzo3.lineCap="round";

	miLienzo3.moveTo(25,100);
	miLienzo3.lineTo(75,100);
	miLienzo3.stroke();

	miLienzo3.font="15px verdana";
	miLienzo3.textBaseline="button";
	miLienzo3.textAlign="start";
	miLienzo3.fillText("mi texto",25,105);

	miLienzo3.closePath();

	// 
	var elemento4 = document.getElementById("lienzo4");
	miLienzo4 = elemento4.getContext("2d");

	var i = new Image();
	i.src = "fotos/luna_de_colores.jpg";
	i.onload = function(){
		miLienzo4.drawImage(i,10,50,120,120);
	}


}