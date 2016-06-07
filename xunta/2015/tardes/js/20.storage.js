$(document).ready(function(){
	$('#guardar').on('click',function(){
		var c = $('#clave').val();
		var v = $('#valor').val();
		sessionStorage.setItem(c,v);
		localStorage.setItem(c,v);
	});

	$('#buscar').on('click',function(){
		var c = $('#claveBuscar').val();
		var v = sessionStorage.getItem(c);
		$('#valorBuscar').val(v);
	});

	$('#borrar').on('click',function(){
		var c = $('#claveBorrar').val();
		sessionStorage.removeItem(c);
	});
});