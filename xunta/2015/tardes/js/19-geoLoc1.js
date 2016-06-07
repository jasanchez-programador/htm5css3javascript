$(document).ready(function(){
	//console.log("cargada");
	$('input#obtener').on('click',function(){
		var tuneo_pos = {
			enableHighAccuracy: true,
			timeout: 1000,
			maximunAge: 600
		};

		geoId = navigator.geolocation.getCurrentPosition(function(lapos){
			var lat = lapos.coords.latitude;
			var lon = lapos.coords.longitude;
			var img = 'http://maps.google.com/maps/api/staticmap';
			img += '?center=' + lat + ',' + lon;
			img += '&zoom=12&size=400x400&sensor=false';
			img += '&markers=' + lat + ',' + lon;

			$('body').append('<img src="' + img + '">');


		},function(elerror){
			alert("codigo: " + elerror.code + " Mensaje: " + elerror.message );
		},tuneo_pos);
	})
});