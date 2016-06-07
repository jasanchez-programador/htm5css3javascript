$(document).ready(function(){

	console.log("historico actual: " + window.history.length);

	window.onpopstate = function(e){
		$('body').append($('<p>' + e.state.sms + '</p>'));
	}

	$('input#atras').on('click',function(){
		window.history.back();
	});
	$('input#alante').on('click',function(){
		window.history.forward();
	});

	$('input#pushState').on('click',function(){
		var objeto = { sms: "desde pushState"}; 
		window.history.pushState(objeto,"futuro titulo","16-HistoryAPI_3.html");
	});
	$('input#replaceState').on('click',function(){
		var objeto = { sms: "desde replaceState"}; 
		window.history.replaceState(objeto,"futuro titulo","16-HistoryAPI_3.html");	
	});	
});