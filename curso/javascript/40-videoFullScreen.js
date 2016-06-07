$(document).ready(function(){
	$('button#full').on('click',function(){
		console.log("pulsado");
		var video = $('video#v');

		if (video[0].requestFullscreen) {
			console.log("normal");
			video[0].requestFullscreen();
		}
		else if (video[0].mozRequestFullScreen) {
			console.log("moz");
			video[0].mozRequestFullScreen();
		}
		else if (video[0].webkitRequestFullscreen) {
			console.log("webkit");
			video[0].webkitRequestFullscreen();
		}
	});
});