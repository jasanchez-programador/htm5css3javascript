$(document).ready(function(){
	console.log("estoy dentro");

	//guardar storage
	$('#guardar').on('click',function(){
		var k = $('#claveG').val();
		var v = $('#valorG').val();
		sessionStorage.setItem(k,v);
		localStorage.setItem(k,v);
	});

	// obtener valor de clave en storage
	$('#buscar').on('click',function(){
		var k = $('#claveB').val();
		var v = localStorage.getItem(k) || "NO EXISTE";
		$('#valorB').val(v)
	});


	$('#borrar').on('click',function(){
		var k = $('#claveR').val();
		localStorage.removeItem(k);
		sessionStorage.removeItem(k);
	});


});