
document.getElementById('guardar').onclick = function(){
	var k = document.getElementById('kgu').value
	var v = document.getElementById('vgu').value
	// GUARDAMOS un JSON como una cadena
	// que es lo unico que entiende
	sessionStorage.setItem(k,JSON.stringify({"prop0":v,"pop1":"cadena","prop2":13}));
	localStorage.setItem(k,JSON.stringify({"prop0":v,"pop1":"cadena","prop2":13}));

}

document.getElementById('buscar').onclick = function(){
	var k = document.getElementById('kbu').value
	// leemos la cadena
	// la transformamos en JSON para obtener la propiedad prop0
	var v = JSON.parse(localStorage.getItem(k))
	document.getElementById('vbu').value = v.prop0
}

document.getElementById('borrar').onclick = function(){
	var k = document.getElementById('kbo').value;
	if ( localStorage.getItem(k) ){
		alert("valor eliminado es: " + localStorage.getItem(k))
		localStorage.removeItem(k);
	}
	else{
		alert("clave inexistente ")
	}
}

