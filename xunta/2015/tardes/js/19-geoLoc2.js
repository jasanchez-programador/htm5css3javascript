$(document).ready(function(){
	//console.log("cargada");
	var geoId = null;
	$('#obtener').on('click',function(){
		var tuneo_pos = {
			enableHighAccuracy: true,
			timeout: 1000,
			maximunAge: 600
		};

		geoId = navigator.geolocation.watchPosition(function(lapos){
			var lat = lapos.coords.latitude;
			var lon = lapos.coords.longitude;
			var pos = document.getElementById('ubicacion');
			var datos = "Latitud: " + lat + '<br>';
			datos += "Longitud: " + lon +  '<br>';
			datos += "Exactitud: " + lapos.coords.accuracy +  '<br>';

			pos.innerHTML = datos;

		},function(elerror){
			alert("codigo: " + elerror.code + " Mensaje: " + elerror.message );
		},tuneo_pos);
	})

	$('#parar').on('click',function(){
		navigator.geolocation.clearWatch(geoId);
		location.reload();
	});

});