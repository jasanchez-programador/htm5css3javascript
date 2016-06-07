$(document).ready(function(){

	var geoId = null;

	$('#cargarMapa').on('click', function(){
		var tuneo_pos = {
			enableHighAccuracy: true,
			maximumAge: 60000,
			timeout: 1000
			
		};

		geoId = navigator.geolocation.getCurrentPosition(function(lapos){
			var lat = lapos.coords.latitude;
			var lon = lapos.coords.longitude;

			var posicionGoogle = new google.maps.LatLng(lat,lon);

			var opcionesGoogleMaps = {
				center: posicionGoogle,
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				styles: [{'stylers':[{'hue':'#112233'},{'gamma':0.1}]}]
				
			}

			var lugarmapa = document.getElementById('lugarMapa');
			var mapa = new google.maps.Map(lugarmapa,opcionesGoogleMaps);

			var contentString = '<div id="content">'+
      			'<div id="siteNotice">'+
		      '</div>'+
		      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
		      '<div id="bodyContent">'+
		      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
		      'sandstone rock formation in the southern part of the '+
		      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
		      'south west of the nearest large town, Alice Springs; 450&#160;km '+
		      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
		      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
		      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
		      'Aboriginal people of the area. It has many springs, waterholes, '+
		      'rock caves and ancient paintings. Uluru is listed as a World '+
		      'Heritage Site.</p>'+
		      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
		      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
		      '(last visited June 22, 2009).</p>'+
		      '</div>'+
      		  '</div>';

	        var infowindow = new google.maps.InfoWindow({
	    		content: contentString
	  		});

	   
			var marker = new google.maps.Marker({
				position: posicionGoogle,
				map: mapa,
				title: "Estas aqui",
				animation: google.maps.Animation.BOUNCE,
				icon: 'fotos/luna_de_colores.jpg'
			});

			marker.addListener('click', function() {
    			infowindow.open(mapa, marker);
  			});

		},function(elerror){
			alert("codigo: " + elerror.code + " Mensaje: " + elerror.message );
		},tuneo_pos);
	});
});