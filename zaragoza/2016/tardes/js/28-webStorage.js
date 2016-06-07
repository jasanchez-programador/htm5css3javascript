$(document).ready(function(){
	console.log("estoy dentro");
	$("#guardar").on('click',function(){
		var k = $('#claveG').val();
		var v = $('#valorG').val();
		console.log("k: " + k);
		console.log("v: " + v);
		sessionStorage.setItem(k,v);
		localStorage.setItem(k,v);

	});
	$("#buscar").on('click',function(){
		var k = $('#claveB').val();
		var v = sessionStorage.getItem(k) || "NO EXISTE";
		$('#valorB').val(v);
	});

	$("#borrar").on('click',function(){
		var k = $('#claveR').val();
		sessionStorage.removeItem(k);
		localStorage.removeItem(k);
	});
});