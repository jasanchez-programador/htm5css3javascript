/*
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
*/
$(document).ready(function(){
	var geoID = null;
	$('#crear').on('click',function(){
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
		geoId = navigator.geolocation.getCurrentPosition(function(lapos){
			var lat = lapos.coords.latitude;
			var lon = lapos.coords.longitude;
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
			var lugarMapa = document.getElementById('mapa');
			// mapa a pintar con las opciones
			var mapa = new google.maps.Map(lugarMapa,opcionesGoogleMaps);
			// poner la marca a la ubicacion
			var marker = new google.maps.Marker({
				position: posicionGoogle,
				map: mapa,
				title: "estas aqui",
				animation: google.maps.Animation.BOUNCE,
				icon: 'fotos/iconos/flower.gif'
			});

			var infowindow = new google.maps.InfoWindow({
	    		content: '<p>Este mensaje se ha mostrado al hacer click en el girasol</p>'
	  		});

	  		marker.addListener('click', function() {
	  		//$(marker).on('click', function() { NO ES UN OBJETO DE JQUERY
	  			console.log("clickk")
    			infowindow.open(mapa, marker);
  			});
		},
		function(elerror){
			alert("CodigoError: " + elerror.code + " MensajeDeError: " + elerror.message);
		},
			tuneo);
	});

	$('#borrar').on('click',function(){
		//pararGeoloc
		// paramos la geolocalizacion con id devuelto por watchPosition()
		navigator.geolocation.clearWatch(geoId);
		// recargo la pagina para comenzar
		//location.reload();
		var m = document.getElementById('mapa')
		m.innerHTML="";
		m.setAttribute("style","");
	});
	
});