function iniciar(){
	// obtenemos el boton
	var boton1 = document.getElementById('obtener');
	// al evento click llamamos a obtener
	boton1.addEventListener('click',obtener,false);
}

function obtener(){
	// invocamos a la funcion getCurrentPosition
	// mostrar es la funcion que recibira la posicion
	// siError es la funcion que se invocara si hay errores al obtener localizacion
	// tuneo es:
	var tuneo = {
		enableHighAccuracy: true, // lo mas preciso posible
		timeout: 1000, // tiempo maximo para obtener localizacion
		maximumAge: 600 // tiempo que dura cache con localizaciones anteriores(getCurrentPosition)
	};
	// para obtener la localizacion solo una vez
	geoId = navigator.geolocation.getCurrentPosition(mostrar,siError,tuneo);
}

function mostrar(laposicion){
	// obtenemos la <seccion> para posteriormente modificarlo y cambiar su contenido por los datos de la posicion
	var pos = document.getElementById('ubicacion');
	// variable datos donde guardaremos los datos de la posicion
	var datos = '';
	datos += '<section id="ubicacion">' + '<br>';
	datos += 'Latitud: ' + laposicion.coords.latitude + '<br>';
	datos += 'Longitud: ' + laposicion.coords.longitude +  '<br>';
	datos += 'Exactitud: ' + laposicion.coords.accuracy +  'mtrs.<br>';
	datos += '</section>' + '<br>';

	pos.innerHTML = datos;
}

// solo se llamara a esa funcion si al hacer click e intentar obtener la posicion hay un error
function siError(elerror){
	alert("CodigoError: " + elerror.code + " MensajeDeError: " + elerror.message);
}

window.addEventListener('load',iniciar,false);