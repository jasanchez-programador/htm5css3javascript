$(document).ready(function(){
	// inicializo el indices a  para guardar fotos!!
	var valorIndice = 0;
	claveFoto = "foto" + valorIndice;
	sessionStorage.setItem("indice",valorIndice);

	// almaceno el globalmente las dimensiones de la camara!!
	wCam = 0;
	hCam = 0;

	// comprobar si el navegador soporta getUserMedia()
	function hasGetUserMedia() {
  		return (navigator.getUserMedia || navigator.webkitGetUserMedia ||
               navigator.mozGetUserMedia || navigator.msGetUserMedia);
	}
	if (hasGetUserMedia()) {
  		console.log(navigator.getUserMedia || navigator.webkitGetUserMedia ||
               navigator.mozGetUserMedia || navigator.msGetUserMedia);
	} else {
  		alert('getUserMedia() is not supported in your browser');
	}

	// creamos un objeto video en la ventana que contiene los 2 datos que necesitamos
	// el flujo de bits que genera la camara
	// la url creada para acceder al flujo de la camara
	// asi podemos grabar y parar la grabacion
	window.datosVideo = {
		'flujo' : null , 
		'url' : null
	};
	// si pinchamos en inicio
	$('button#inicio').on('click',function(){
		// si soporta getUserMedia para chrome
		if (navigator.webkitGetUserMedia){
			// PARAMETRO 1: pedimos video y audio
			navigator.webkitGetUserMedia({video: true, audio: true}, 
				// PARAMETRO 2: funcion de ok que recibe el flujo de camara y microfono
				function(flujoCamara) {
					// le damos los datos al objeto del window
					// para poder parar la grabacion
					datosVideo.flujo = flujoCamara;
					datosVideo.url = window.URL.createObjectURL(flujoCamara);
					// modificamos la propiedad src de la etiqueta video para:
					// darle la url con el flujo generado por camara y microfono
		    		$('video#camara').attr({
		    			"src" : datosVideo.url,
		    		});
					//$('video#camara').append($('<source src="' + datosVideo.url +'">'));

	   		}, // PARAMETRO 3: funcion de error 
	   		function(e){
	   			console.log("error al intentar grabar");
	   		});
	   	};
	   	if (navigator.mozGetUserMedia){
			// PARAMETRO 1: pedimos video y audio
			navigator.mozGetUserMedia({video: true, audio: true}, 
				// PARAMETRO 2: funcion de ok que recibe el flujo de camara y microfono
				function(flujoCamara) {
					// le damos los datos al objeto del window
					// para poder parar la grabacion
					datosVideo.flujo = flujoCamara;
					datosVideo.url = window.URL.createObjectURL(flujoCamara);
					// modificamos la propiedad src de la etiqueta video para:
					// darle la url con el flujo generado por camara y microfono
		    		$('video#camara').attr({
		    			"src" : datosVideo.url,
		    		});
					//$('video#camara').append($('<source src="' + datosVideo.url +'">'));

	   		}, // PARAMETRO 3: funcion de error 
	   		function(e){
	   			console.log("error al intentar grabar");
	   		});
	   	};
	});

	// si hacemos click en para
	$('button#fin').on('click',function(){
		// si soporta getUserMedia para chrome 
		if (navigator.webkitGetUserMedia){
			// Si hay datos recibidos de la camara
			if (datosVideo.flujo !== null){
				// del objeto de la ventana
				// paramos el flujo
				// datosVideo.flujo.stop(); NO FUNCIONA EN CHROME
				datosVideo.flujo.getVideoTracks()[0].stop();
				// paramos el flujo de la camara
				window.URL.revokeObjectURL(datosVideo.url);
				// quitamos propiedad src a la etiqueta video
				$('video#camara').attr({
					"src" : null
				});
				//$('source').remove();
			}
		}
		if (navigator.mozGetUserMedia){
			// Si hay datos recibidos de la camara
			if (datosVideo.flujo !== null){
				// del objeto de la ventana
				// paramos el flujo
				datosVideo.flujo.stop();
				// paramos el flujo de la camara
				window.URL.revokeObjectURL(datosVideo.url);
				// quitamos propiedad src a la etiqueta video
				$('video#camara').attr({
					"src" : null
				});
				//$('source').remove();
			}
		}
	});

	// Para hacer una foto
	// obtenemos lo que hay actualmente en la eqtiqueta video
	// y lo dibujamos con canvas
	$('button#foto').on('click', function(e){
    // la camara
    var oCamara = $('video#camara');
    // el lienzo de canvas
    var oFoto = $('canvas#canvas');
    // creamos contexto del lienzo para empezar a pintar
    var oContexto = oFoto[0].getContext('2d');
    // dibujamos la imagen de la camara: 
    // desde las coordenadas (0,0)
    // hasta donde acabe la imagen (,)
    wCam = oCamara.width();
    hCam = oCamara.height();
    oContexto.drawImage(oCamara[0], 0, 0, wCam, hCam);
    // cada vez que hacemos una foto lo guardamos en session storage con la clave
    // fotoIndice
    // el indice a su vez es otro par en sessionstorage
    console.log("CLAVEFOTO: " + oCamara[0]);
    sessionStorage.setItem(claveFoto,oCamara[0]);
    console.log("CF: " + claveFoto);
    console.log("VF: " + sessionStorage.getItem(claveFoto));
    
    valorIndice = parseInt(valorIndice) + 1;
	claveFoto = "foto" + valorIndice;
    sessionStorage.setItem("indice",valorIndice);

	});

	$('button#atras').on('click',function(){
		// el lienzo de canvas
		if (valorIndice >= 0) {
		    var oFoto = $('canvas#canvas');
		    // creamos contexto del lienzo para empezar a pintar
		    var oContexto = oFoto[0].getContext('2d');
// Quiero cargar la foto guardada en sessionStorage y NO LO CONSIGO DE MOMENTO
		    var foto = new Image();
			foto.src = sessionStorage.getItem(claveFoto);
			foto.onload = function(){
				console.log("FOTO: " + foto);
				oContexto.drawImage(foto, 0, 0, wCam, hCam);
			};
			
		    valorIndice = parseInt(valorIndice) - 1;
			claveFoto = "foto" + valorIndice;
		}

	});

	$('button#alante').on('click',function(){});
});