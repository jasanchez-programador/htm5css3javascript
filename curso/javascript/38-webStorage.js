// Como sustituto de cookies para:
//  - guardar en local el carrito de la compra!!
//  - Mantener preferencias de un usuario al hacer login
//  - Saber que el usuario ya se logeo y dejarle pasar!!
//  - Seguimiento de navgacion del usuario para publicidad
$(document).ready(function(){
	$('input#guardar').on('click',function(){
		var c = $('input#clave').val();
		var v = $('input#valor').val();
		sessionStorage.setItem(c,v);
	});

	$('input#buscar').on('click',function(){
		var cbus = $('input#claveBuscar').val();
		var vbus = sessionStorage.getItem(cbus) || "NO EXISTE CLAVE";
		$('input#valorBuscar').attr('value',vbus);
	});

	$('input#borrar').on('click',function(){
		var cbor = $('input#claveBorrar').val();
		sessionStorage.removeItem(cbor);
		alert("borrado: " + cbor);
		$('input[text]').val("");
	});

});