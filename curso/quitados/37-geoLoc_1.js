
$(document).ready(function(){
	$('input#obtener').on('click',function(){
		var tuneo_posicion = {
			// lo mas preciso posible
			enableHighAccuracy: true, 
			// tiempo maximo para obtener localizacion
			timeout: 1000,            
			// tiempo que dura cache con localizaciones anteriores(getCurrentPosition)
			maximumAge: 600           
		};
		// obtenemos posicion
		geoId = navigator.geolocation.getCurrentPosition(function(lapos){
			// mostrar el mapa
			// obtengo posicion de coords
			var lat = lapos.coords.latitude;
			var lon = lapos.coords.longitude;
			// creo URL con la posicion en google maps
			var origenimg = 'http://maps.google.com/maps/api/staticmap';
			origenimg += '?center=' + lat + ',' + lon; 
			origenimg += '&zoom=12&size=400x400&sensor=false&markers=' + lat + ',' + lon;
			// inserto la imagen de google maps
			$('section#mapa').append('<img src="' + origenimg + '">');
		},
		function(elerror){
			// mostrar error si lo hay
			alert("CodigoError: " + elerror.code + " MensajeDeError: " + elerror.message);
		},
		tuneo_posicion);
	});
});
