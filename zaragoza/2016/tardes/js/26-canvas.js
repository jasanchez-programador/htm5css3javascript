window.onload = function(){
	console.log("cargada");
	var elemento = document.getElementById("lienzo1");
	var miLienzo1 = elemento.getContext('2d');

	miLienzo1.strokeRect(1,1,80,40);
	miLienzo1.fillRect(85,1,80,40);
	miLienzo1.clearRect(40,5,80,40);

	miLienzo1.globalAlpha="0.2";
	miLienzo1.fillStyle="darkRed";
	miLienzo1.strokeStyle="blue";
	miLienzo1.strokeRect(5,45,80,40);
	miLienzo1.fillRect(7,47,75,35);

	//miLienzo1.clearRect(40,5,80,40);

	var elemento2 = document.getElementById('lienzo2');
	var miLienzo2 = elemento2.getContext('2d');

	var gl = miLienzo2.createLinearGradient(1,1,99,1);
	gl.addColorStop(0.25,"darkOrange");
	gl.addColorStop(0.40,"green");
	gl.addColorStop(0.75,"darkRed");
	
	miLienzo2.fillStyle = gl;
	miLienzo2.fillRect(1,1,99,99);

	//var gl = miLienzo2.createRadialGradient(50,200,100,50,200,1);
	var gl = miLienzo2.createRadialGradient(1,250,100,100,150,1);
	gl.addColorStop(0.30,"darkOrange");
	gl.addColorStop(0.50,"green");
	gl.addColorStop(0.70,"darkRed");
	
	miLienzo2.fillStyle = gl;
	miLienzo2.fillRect(1,150,99,100);

	// cuadrado
	miLienzo2.fillStyle="black";
	miLienzo2.strokeStyle="black";
	miLienzo2.beginPath();
	miLienzo2.moveTo(150,10);
	miLienzo2.lineTo(150,60);
	miLienzo2.lineTo(200,60);
	miLienzo2.lineTo(200,10);
	miLienzo2.lineTo(150,10);
	//miLienzo2.fill();
	miLienzo2.stroke();
	miLienzo2.closePath();

	// circulo
	miLienzo2.beginPath();
	miLienzo2.arc(150,100,30,Math.PI,Math.PI*2,true)
	miLienzo2.fill();
	//miLienzo2.stroke();
	miLienzo2.closePath();

	// tablero 3 en raya en lienzo3
	var elemento3 = document.getElementById("lienzo3");
	var miLienzo3 = elemento3.getContext("2d");

	miLienzo3.beginPath();

	// for( var x=5; x<=65; x+=20 ){
	// 	miLienzo3.moveTo(x,5);
	// 	miLienzo3.lineTo(x,65);
	// }
	// for( var y=5; y<=65; y+=20 ){
	// 	miLienzo3.moveTo(5,y);
	// 	miLienzo3.lineTo(65,y);
	// }
	for( var p=5; p<=65; p+=20 ){
		miLienzo3.moveTo(5,p);
		miLienzo3.lineTo(65,p);
		miLienzo3.moveTo(p,5);
		miLienzo3.lineTo(p,65);
	}

	miLienzo3.stroke();
	miLienzo3.closePath();

	// subrayar un texto
	miLienzo3.beginPath();
	miLienzo3.strokeStyle="orange";
	miLienzo3.lineWidth=20;
	miLienzo3.lineCap="round"
	miLienzo3.moveTo(25,100);
	miLienzo3.lineTo(90,100);

	miLienzo3.stroke();
	miLienzo3.font="15px Verdana";
	miLienzo3.textAlign="start";
	miLienzo3.textBaseline="button";
	miLienzo3.fillText("mi texto",25,105);

	miLienzo3.closePath();

	// insertar imagen
	var elemento4 = document.getElementById("lienzo4");
	var miLienzo4 = elemento4.getContext("2d");

	var i = new Image();
	i.src="fotos/luna_de_colores.jpg";

	i.onload = function(){
		miLienzo4.drawImage(i,10,10,150,150);
	}


}