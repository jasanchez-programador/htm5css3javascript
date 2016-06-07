$(document).ready(function(){
	console.log("estoy dentro");

	$('#crear').on('click',function(){

		navigator.geolocation.getCurrentPosition(function(pos){
				var lat = pos.coords.latitude;
				var lon = pos.coords.longitude;

			    var elmapa = 'http://maps.google.com/maps/api/staticmap?center='
			    	+ lat + "," + lon +
			    	'&zoom=12&size=400x600&sensor=false&markers='
			    	+ lat + "," + lon;

			    var imgMapa = $('<img>').attr("src",elmapa);
			    $('#mapa').append(imgMapa);

			},function(err){
				alert("ERROR: " + err.code + "--" + err.message);
			},
			{"enableHighAccuracy": true,
			"timeout":1000,
			"maximumAge": 1000})
		

	})

	$('#borrar').on('click',function(){
		$('#mapa').html("");
	})
});