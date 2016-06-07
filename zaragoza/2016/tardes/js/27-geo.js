$(document).ready(function(){
	console.log("estoy dentro");

	$('#crear').on('click',function(){

		navigator.geolocation.getCurrentPosition(function(pos){
			// Si obtengo POS
			var lat = pos.coords.latitude;
			var lon = pos.coords.longitude;

			var urlMapa = "http://maps.google.com/maps/api/staticmap?center=" +
				lat +","+lon+ 
				"&zoom=15&size=500x500&sensor=false&markers=" +
				lat +","+lon
			
			var imgMapa = $('<img>').attr("src",urlMapa)
			$('#mapa').append(imgMapa);
		},function(err){
			// Si error al aobtener posicion
			alert("ERROR: " + err.code + "--" + err.message);
		},
		{
			enableHighAccuracy: true,
			timeout: 1000,
			maximumAge: 60000
		});
		
	});

	$('#borrar').on('click',function(){
		$('#mapa').html("");
	});
});