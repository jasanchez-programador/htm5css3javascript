function inicio(){
	var boton1 = document.getElementById('crear');
	var boton2 = document.getElementById('borrar');

	boton1.addEventListener('click',mostrar,false);
	boton2.addEventListener('click',borrar,false);
}

function mostrar(){
	tuneo = {
		enableHighAccuracy: true, // lo mas preciso posible
		timeout: 1000, // tiempo maximo para obtener localizacion
		maximumAge: 600 // cada cuanto tiempo pide la nueva localizacion(watchPosition)
	};
	geoId = navigator.geolocation.watchPosition(mostrarMapa,siError,tuneo);
}

function mostrarMapa(lapos){
	var lat = lapos.coords.latitude;
	var lon = lapos.coords.longitude;
	
	var origenimg = 'http://maps.google.com/maps/api/staticmap';
	origenimg += '?center=' + lat + ',' + lon + '&zoom=12&size=400x400&sensor=false&markers=' + lat + ',' + lon;
	//origenimg += '?center=' + lapos.coords.latitude + ',' + lapos.coords.longitude + '&zoom=12&size=400x400';
	//origenimg += '&sensor=false&markers=' + lapos.coords.latitude + ',' + lapos.coords.longitude;
	
	var zonamapa = document.getElementById('mapa');
	var mapa = '<img src="' + origenimg + '">';
	// cambiamos el contenido de la seccion
	zonamapa.innerHTML = mapa;

}

function siError(elerror){
	alert("IdError: " + elerror.code + "MensajeError: " + elerror.message);
}

function borrar(){
	// paro la geolocalizacion
	navigator.geolocation.clearWatch(geoId);
	// borro el mapa
	var zonamapa = document.getElementById('mapa').innerHTML = "";
	// inicio el proceso
	inicio();
}

window.addEventListener('load',inicio,false);