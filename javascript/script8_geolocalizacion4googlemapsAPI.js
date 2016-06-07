function inicio(){
	var cargarMapa = document.getElementById("cargarMapa");
	cargarMapa.addEventListener('click',localizar,false);
}

function localizar(){
	tuneo = {
		enableHighAccuracy: true, // lo mas preciso posible
		timeout: 1000, // tiempo maximo para obtener localizacion
		maximumAge: 2500 // cada cuanto tiempo pide la nueva localizacion(watchPosition)
	};
	// que hago al obtener la posicion o si hay un error
	geoId = navigator.geolocation.watchPosition(mostrarMapa,siError,tuneo);
}

function mostrarMapa(laloc){
	var lat = laloc.coords.latitude;
	var lon = laloc.coords.longitude;
	var posicionGoogle = new google.maps.LatLng(lat,lon);


	opcionesGoogleMaps={
		// Que localizacion
		center: posicionGoogle,
		// zoom
		zoom: 15,
		// el mapa de carretera, el de por defecto en googleamps
		mapTypeId: google.maps.MapTypeId.ROADMAP 
	};

	// donde pinto el mapa
	var lugarMapa = document.getElementById('lugarMapa');
	// mapa a pintar con las opciones
	var mapa = new google.maps.Map(lugarMapa,opcionesGoogleMaps);
	// poner la marca a la ubicacion
	var marker = new google.maps.Marker({
		position: posicionGoogle,
		map: mapa,
		title: "estas aqui",
		animation: google.maps.Animation.BOUNCE
	});

}

function siError(elerr){
	alert("CodigoError: " + elerr.code + "MensajeError: " + elerr.message);
}

window.addEventListener('load',inicio,false);