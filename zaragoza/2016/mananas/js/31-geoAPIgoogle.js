$(document).ready(function(){
	console.log("estoy dentro");

	$('#crear').on('click',function(){

		navigator.geolocation.getCurrentPosition(function(pos){
				var lat = pos.coords.latitude;
				var lon = pos.coords.longitude;

				var posGoogle = new google.maps.LatLng(lat,lon);
				var lugarMapa = $('#mapa')[0];

				var mapa = new google.maps.Map(lugarMapa,{
					center: posGoogle,
					zoom:12,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				})

				var marker = new google.maps.Marker({
					position: posGoogle,
					map: mapa,
					title: "estas aqui!!",
					animation: google.maps.Animation.BOUNCE,
					icon: 'fotos/iconos/flower.gif'
				})

				var infowindow = new google.maps.InfoWindow({
					content: "<p>Has pinchado al girasol</p>"
				})

				marker.addListener("click",function(){
					infowindow.open(mapa,marker);
				})
			    

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