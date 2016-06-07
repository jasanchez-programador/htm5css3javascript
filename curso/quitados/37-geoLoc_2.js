/*function iniciar(){
	// obtenemos el boton
	var boton1 = document.getElementById('obtener');
	// al evento click llamamos a obtener
	boton1.addEventListener('click',obtener,false);
	//Al usar watchPosition, que pulsar el boton paremos la geolocalizacion
	var boton2 = document.getElementById('parar');
	boton2.addEventListener('click',pararGeoloc,false);
}

function obtener(){
	// invocamos a la funcion getCurrentPosition
	// mostrar es la funcion que recibira la posicion
	// siError es la funcion que se invocara si hay errores al obtener localizacion
	// tuneo es:
	var tuneo = {
		enableHighAccuracy: true, // lo mas preciso posible
		timeout: 1000, // tiempo maximo para obtener localizacion
		maximumAge: 600 // cada cuanto tiempo pide la nueva localizacion(watchPosition)
	};
	// para obtener la localizacion 
	geoId = navigator.geolocation.watchPosition(mostrar,siError,tuneo);
}

function mostrar(laposicion){
	// obtenemos la <seccion> para posteriormente modificarlo y cambiar su contenido por los datos de la posicion
	var pos = document.getElementById('ubicacion');
	// variable datos donde guardaremos los datos de la posicion
	var datos = '';
	datos += 'Latitud: ' + laposicion.coords.latitude + '<br>';
	datos += 'Longitud: ' + laposicion.coords.longitude +  '<br>';
	datos += 'Exactitud: ' + laposicion.coords.accuracy +  'mtrs.<br>';
	// cambiamos el contenido de la seccion
	pos.innerHTML = datos;
}

// solo se llamara a esa funcion si al hacer click e intentar obtener la posicion hay un error
function siError(elerror){
	alert("CodigoError: " + elerror.code + " MensajeDeError: " + elerror.message);
}

// funcion para:
// 1.- parar la geolocalizacion
// 2.- para reiniciar la pagina tanto visual como funcionalmente
function pararGeoloc(){
	// paramos la geolocalizacion con id devuelto por watchPosition()
	navigator.geolocation.clearWatch(geoId);
	//volvemos al punto de inicio para poder activar de nuevo la geolocalizacion
	var pos = document.getElementById('ubicacion');
	// variable datos donde guardaremos los datos de la posicion
	var inicio = '<button id="obtener">Obtener ubicacion</button>';
	// cambiamos el contenido de la seccion
	pos.innerHTML = inicio;
	// vuelco a llamar a la funcion iniciar para volver a la funcionalidad del punto de partida
	iniciar();
}

window.addEventListener('load',iniciar,false);
*/
$(document).ready(function(){
	var geoID = null;
	$('#obtener').on('click',function(){
		//obtener
		// invocamos a la funcion getCurrentPosition
		// mostrar es la funcion que recibira la posicion
		// siError es la funcion que se invocara si hay errores al obtener localizacion
		// tuneo es:
		var tuneo = {
			enableHighAccuracy: true, // lo mas preciso posible
			timeout: 1000, // tiempo maximo para obtener localizacion
			maximumAge: 600 // cada cuanto tiempo pide la nueva localizacion(watchPosition)
		};
		// para obtener la localizacion 
		geoId = navigator.geolocation.watchPosition(function(laposicion){
			// obtenemos la <seccion> para posteriormente modificarlo y cambiar su contenido por los datos de la posicion
			var pos = document.getElementById('ubicacion');
			// variable datos donde guardaremos los datos de la posicion
			var datos = '';
			datos += 'Latitud: ' + laposicion.coords.latitude + '<br>';
			datos += 'Longitud: ' + laposicion.coords.longitude +  '<br>';
			datos += 'Exactitud: ' + laposicion.coords.accuracy +  'mtrs.<br>';
			// cambiamos el contenido de la seccion
			pos.innerHTML = datos;
		},
			function(elerror){
				alert("CodigoError: " + elerror.code + " MensajeDeError: " + elerror.message);
			},
			tuneo);
	});
	
	$('#parar').on('click',function(){
		//pararGeoloc
		// paramos la geolocalizacion con id devuelto por watchPosition()
		navigator.geolocation.clearWatch(geoId);
		// recargo la pagina para comenzar
		location.reload();
	});
	
});