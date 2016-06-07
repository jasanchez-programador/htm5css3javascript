function iniciar(){
	var elemento = document.getElementById('lienzo1');
	// variable global, accesible desde fuera de la funcion
	miLienzo=elemento.getContext('2d');
	// dibuja un cuadrado relleno
	miLienzo.fillRect(1,1,80,40);
	// dibuja un cuadrado vacio
	miLienzo.strokeRect(100,1,80,40);
	// limpia/borrador
	miLienzo.clearRect(50,1,80,40);

	var elemento2 = document.getElementById('lienzo2');
	miLienzo2 = elemento2.getContext('2d');
	
	// dar colores, se vuelven en los de por defecto, para cambiarlos habra que cambiarlos en codigo mas abajo
	miLienzo2.strokeStyle="Red";
	miLienzo2.fillStyle="Blue";
	miLienzo2.globalAlpha="0.7"; // tranparencia

	miLienzo2.strokeRect(30,5,100,100);
	miLienzo2.fillRect(35,10,90,90);
	miLienzo2.clearRect(40,15,80,80);

	var elemento3 = document.getElementById('lienzo3');
	miLienzo3 = elemento3.getContext('2d');
	// objeto gradiente Lineal, coordinadas de inicio de gradiente y coordenadas de fin de gradiente
	// se da a todo el lienzo !!!
	var gradienteLineal = miLienzo3.createLinearGradient(0,10,20,50);
	gradienteLineal.addColorStop(0.5,"orange"); // donde acaba el color inicial
	gradienteLineal.addColorStop(1,"red");      // donde acaba el color final
	// objeto gradiente Radial, coordinadas y radio de inicio de gradiente y coordenadas y radio de fin de gradiente
	// se da a todo el lienzo !!!
	var gradienteRadial = miLienzo3.createRadialGradient(0,10,10,10,20,100);
	gradienteRadial.addColorStop(0.5,"orange"); // donde acaba el color inicial
	gradienteRadial.addColorStop(1,"red");      // donde acaba el color final
	
//	miLienzo3.fillStyle = gradienteLineal;
	miLienzo3.fillStyle = gradienteRadial;
	miLienzo3.fillRect(1,1,100,100);

	//vamos a pintar con el LAPIZ

	// un cuadrado
	miLienzo.beginPath();
	miLienzo.moveTo(150,50);
	miLienzo.lineTo(150,100);
	miLienzo.lineTo(200,100);
	miLienzo.lineTo(200,50);
	miLienzo.closePath(); // cierra el dibujo con linea desde donde acabo ultimo trazo al inicio
	miLienzo.fill();

	// un TRIANGULO
	miLienzo.beginPath();
	miLienzo.moveTo(150,100);
	miLienzo.lineTo(150,150);
	miLienzo.lineTo(200,150);
	miLienzo.closePath(); // cierra el dibujo con linea desde donde acabo ultimo trazo al inicio
	miLienzo.stroke();

	// un circulo
	miLienzo.beginPath();
	miLienzo.arc(150,200,10,0,360); //(empiezoX,empiezoY,radio,gradoInicio,gradoFin)
	miLienzo.closePath(); // cierra el dibujo con linea desde donde acabo ultimo trazo al inicio
	miLienzo.stroke();

	var elemento4 = document.getElementById('lienzo4');
	miLienzo4 = elemento4.getContext('2d');
	// tablero tres en raya
	miLienzo4.beginPath();
	for (x=5; x<=65; x=x+20){
		miLienzo4.moveTo(x,5);
		miLienzo4.lineTo(x,65);
	}
	for (y=5; y<=65; y=y+20){
		miLienzo4.moveTo(5,y);
		miLienzo4.lineTo(65,y);
	}	
	miLienzo4.closePath();
	miLienzo4.stroke();

	miLienzo4.beginPath();
	miLienzo4.moveTo(25,100);
	miLienzo4.strokeStyle="darkorange";
	miLienzo4.lineWidth=20; // ancho de las lineas
	//miLienzo4.lineCap="butt"; // por defecto
	miLienzo4.lineCap="round"; // se le añade redondeo al acabar
	//miLienzo4.lineCap="square"; // se le añade un cuadrado al acabar
	miLienzo4.lineTo(75,100);
	miLienzo4.closePath();
	miLienzo4.stroke();
	// poner texto en la linea naranja
	miLienzo4.font="15px Verdana";
	miLienzo4.textAling="start";
	miLienzo4.textBaseline="center";
	miLienzo4.fillText("mi texto",25,105);//donde movi el lapiz para empezar

	var imagen = new Image();
	imagen.src='fotos/luna_de_colores.jpg';
	imagen.addEventListener('load',function(){
		miLienzo3.drawImage(imagen,1,1,100,100);//empieza en 1,1, acaba en 100,100
	}, false);
}
window.addEventListener('load',iniciar,false);