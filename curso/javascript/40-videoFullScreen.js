
$(document).ready(function(){
	var video = $('video#v');
	// play
	$('button#play').on('click',function(){
		video[0].play();
	});
	// pause
	$('button#pause').on('click',function(){
		video[0].pause();
	});
	// subirVel
	$('button#bajarVel').on('click',function(){
		if (video[0].playbackRate + 0.25 <= 5) {
			video[0].playbackRate += 0.25;
		}
		console.log("velocidad: " + video[0].playbackRate)
	});
	// bajarVel
	$('button#subirVel').on('click',function(){
		if (video[0].playbackRate - 0.25 > 0) {
			video[0].playbackRate -= 0.25;
		}
		console.log("velocidad: " + video[0].playbackRate)
	});
	// subirVol
	$('button#subirVol').on('click',function(){
		if (video[0].volume + 0.05 < 1) {
			video[0].volume += 0.05;
		}
	});
	// bajarVol
	$('button#bajarVol').on('click',function(){
		if (video[0].volume - 0.05 >= 0) {
			video[0].volume -= 0.05;
		}
	});
	// mute
	$('button#mute').on('click',function(){
		video[0].volume = 0;
	});
	// full screen
	$('button#full').on('click',function(){
		if (video[0].requestFullscreen) {
			video[0].requestFullscreen();
		}
		else if (video[0].mozRequestFullScreen) {
			video[0].mozRequestFullScreen();
		}
		else if (video[0].webkitRequestFullscreen) {
			video[0].webkitRequestFullscreen();
		}
	});
});