$(document).ready(function(){
	console.log("estoy dentro");
	$('#full').on('click',function(){
		var video = $('#video');

		if (video[0].requestFullScreen){
			video[0].requestFullScreen()
		}
		else if (video[0].webkitRequestFullScreen){
			video[0].webkitRequestFullScreen()
		} 
		else if(video[0].mozRequestFullScreen){
			video[0].mozRequestFullScreen()
		}
	});
});