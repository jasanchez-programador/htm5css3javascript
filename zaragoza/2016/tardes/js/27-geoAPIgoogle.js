$(document).ready(function(){
	console.log("estoy dentro");

	$('#crear').on('click',function(){

		navigator.geolocation.getCurrentPosition(function(pos){
			// Si obtengo POS
			var lat = pos.coords.latitude;
			var lon = pos.coords.longitude;

			var latLonGoogle = new google.maps.LatLng(lat,lon);

			var lugarMapa = $('#mapa')[0]
			var mapa = new google.maps.Map(lugarMapa,{
				center: latLonGoogle,
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});

			var marcador = new google.maps.Marker({
				position: latLonGoogle,
				map: mapa,
				title: "casi acierta por IP!!",
				icon: 'fotos/iconos/flower.gif',
				animation: google.maps.Animation.DROP
			});

			var iw = new google.maps.InfoWindow({
				content: '<p>Casi apunta al edificio del curso<p>'
			});

			marcador.addListener('click',function(){
				iw.open(mapa,marcador);
			});

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