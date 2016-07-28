// al cargar la pagina incluimos a todos los usuarios que ya existian!!
for(var u=0; u<localStorage.length; u++){
	var k = localStorage.key(u);
	$('#usuarios').append('<option id="'+k+'"name="'+k+'"value="'+k+'">'+k+'</option>');
}

// creamos o actualizamos nuevo usuario y su color de fondo preferido
$('#crear').on('click', function(){
	var k = $('#uc').val()
	var v = $('#fav').val();
	// Comprobamos si el usuario ya existia
	var existe = localStorage.getItem(k);
	// GUARDAMOS o actualizamos usuario
	sessionStorage.setItem(k,JSON.stringify({"nombre":k,"color":v}));
	localStorage.setItem(k,JSON.stringify({"nombre":k,"color":v}));
	// Creamos el usuario en el select
	// Si no exisitia
	if (!existe){
		$('#usuarios').append('<option id="'+k+'"name="'+k+'"value="'+k+'">'+k+'</option>');
	}
})

// cambiamos color de fondo en base al usuario elegido
$('#usuarios').on('change',function(){
	var color;
	var seleccionado = $(this).val();
	if (seleccionado == "Selecciona Usuario de la lista"){
		color = "white";
	}
	else{
		// obtenemos el valor en JSON del usuario seleccionado
		var usuario = JSON.parse(localStorage.getItem(seleccionado))
		color = usuario.color;
	}
	$('body').css({"backgroundColor":color})
})

// eliminamos usuario
// tanto del webStorage como del select

$('#borrar').on('click',function(){
	var usuario = $('#ub').val();
	var existe = localStorage.getItem(usuario);
	if(existe){
		alert("Borrado usuario: " + existe)
		localStorage.removeItem(usuario);
		$('option#'+usuario).remove()
		$('body').css({"backgroundColor":"white"})
	}
	else {
		alert("Usuario inexistente")
	}
})