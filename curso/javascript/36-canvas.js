window.onload = function() {
	// obtener contexto del lienzo 1
	var elemento = document.getElementById('lienzo1');
	miLienzo = elemento.getContext('2d');
	// Dibujar figuras
	miLienzo.fillRect(1,1,80,40);
	// dibuja un cuadrado vacio
	miLienzo.strokeRect(100,1,80,40);
	// limpia/borrador
	miLienzo.clearRect(50,0,80,40);

	// estilos
	miLienzo.globalAlpha="0.7";
	miLienzo.strokeStyle="Red";
	miLienzo.strokeRect(10,50,100,100);
	miLienzo.fillStyle="Blue";
	miLienzo.fillRect(15,55,90,90);

	// Gradiente lineal
	var elemento2 = document.getElementById('lienzo2');
	miLienzo2 = elemento2.getContext('2d');

	// createLinearGradient(incioX,inicioY,finX,finY)
	// var gradienteLineal = miLienzo2.createLinearGradient(0,10,20,50);

	// var gradienteLineal = miLienzo2.createLinearGradient(1,1,101,101);// en diagonal /
	// var gradienteLineal = miLienzo2.createLinearGradient(1,1,1,101);// en horizontal -
	// var gradienteLineal = miLienzo2.createLinearGradient(1,1,101,1);// en vertical |
	var gradienteLineal = miLienzo2.createLinearGradient(50,1,1,101);// jugar!!
	gradienteLineal.addColorStop(0.25,"orange"); // donde acaba el color inicial
	gradienteLineal.addColorStop(0.5,"green");
	gradienteLineal.addColorStop(1,"red");
	
	miLienzo2.fillStyle = gradienteLineal;
	miLienzo2.fillRect(1,1,100,100);

	// Gradiente Radial
	// createRadialGradient(incioX,inicioY,radioInicio,finX,finY,radioFin);
	// var gradienteRadial = miLienzo2.createRadialGradient(0,110,10,10,120,100);

	// comienza en el centro con radio1 y termina con el radio total del cuadrado
	var gradienteRadial = miLienzo2.createRadialGradient(54,160,1,54,160,100);
	// comienza al final con el radio total del cuadrado y termina en el centro
	var gradienteRadial = miLienzo2.createRadialGradient(54,160,100,54,160,1);
	// comienza esquina superio izquerda, acaba esquina inferior derecha
	// empieza con radio total del cuadrado y acaba en 1
	// parace que hay un foco en la esquina inferior derecha
	var gradienteRadial = miLienzo2.createRadialGradient(1,110,100,101,210,1);
	// comienza esquina superio derecha, acaba esquina inferior izquierda
	// empieza con radio total del cuadrado y acaba en 1
	// parace que hay un foco en la esquina inferior izquierda
	var gradienteRadial = miLienzo2.createRadialGradient(101,110,100,1,210,1);
	
	gradienteRadial.addColorStop(0.25,"orange"); // donde acaba el color inicial
	gradienteRadial.addColorStop(0.5,"green");
	gradienteRadial.addColorStop(1,"red");

	miLienzo2.fillStyle = gradienteRadial;
	miLienzo2.fillRect(1,110,100,100);

	//pintar con el LAPIZ un cuadrado
	miLienzo2.strokeStyle="Black";
	miLienzo2.fillStyle="Black";
	miLienzo2.beginPath();
	miLienzo2.moveTo(150,50);
	miLienzo2.lineTo(150,100);
	miLienzo2.lineTo(200,100);
	miLienzo2.lineTo(200,50);
	miLienzo2.fill();
	miLienzo2.closePath();// cierra el dibujo con linea desde donde acabo ultimo trazo al inicio

	// pintar con el lapiz un triangulo
	miLienzo2.beginPath();
	miLienzo2.moveTo(150,100);
	miLienzo2.lineTo(150,150);
	miLienzo2.lineTo(200,150);
	miLienzo2.lineTo(150,100);
	miLienzo2.stroke();
	miLienzo2.closePath();// cierra el dibujo con linea desde donde acabo ultimo trazo al inicio


	// pintar con el lapiz un triangulo
	miLienzo2.beginPath();
	miLienzo2.arc(150,200,10,0,360); //(empiezoX,empiezoY,radio,gradoInicio,gradoFin)
	miLienzo2.stroke();
	miLienzo2.closePath();           // cierra el dibujo con linea desde donde acabo ultimo trazo al inicio
	

	// Dibujar un tablero de tres en raya
	var elemento3 = document.getElementById('lienzo3');
	elemento3 = elemento3.getContext('2d');
	// Iniciamos el lapiz
	elemento3.beginPath();
	// lineas horizontales moviendo y pintando
	for (x=5; x<=65; x=x+20){
		elemento3.moveTo(x,5);
		elemento3.lineTo(x,65);
	}
	// lineas verticales moviendo y pintando
	for (y=5; y<=65; y=y+20){
		elemento3.moveTo(5,y);
		elemento3.lineTo(65,y);
	}	
	// Finalizar el tablero
	elemento3.closePath();
	elemento3.stroke();

	// Escribir un texto y Subrrayarlo
	// inicamos lapiz
	elemento3.beginPath();
	// PRIMERO SUBRALLAMOS PARA QUE NO TACHE AL TEXTO
	// cambiamos color   
	elemento3.strokeStyle="darkorange";  
	// cambiamos ancho
	elemento3.lineWidth=20;     
	// linea con redondeo en extremos         
	elemento3.lineCap="round";
	// movemos          
	elemento3.moveTo(25,100);
	// pintamos linea acabada en:
	// X: 25+90
	// Y: mantenemos en 100          
	elemento3.lineTo(90,100); 
	// finalizar linea           
	elemento3.stroke();
	// ESCRIBIMOS EL TEXTO ENCIMA DEL SUBRAYADO
	// Fuente y tamaño
	elemento3.font="15px Verdana";
	// alineacion
	elemento3.textAling="start";
	elemento3.textBaseline="button";
	// El propio texto coordenadas de inicio
	elemento3.fillText("mi texto",25,105);  
	       
	elemento3.closePath();				 

	

	// situar una imagen en nuestro lienzo
	var elemento4 = document.getElementById('lienzo4')
	miLienzo4 = elemento4.getContext('2d');

	var imagen = new Image();
	imagen.src='fotos/luna_de_colores.jpg';
	imagen.onload = function(){
		//empieza en 1,1, acaba en 100,100
		miLienzo4.drawImage(imagen,1,1,100,100);
	};

}