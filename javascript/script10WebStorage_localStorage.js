function inicio(){

	clave = document.querySelector("#clave");
	clave.addEventListener('input',comprobar,false);
	valor = document.querySelector("#valor");
	valor.addEventListener('input',comprobar,false);
	grabar = document.querySelector("#grabar");
	grabar.addEventListener('click',guardar,false);

	mostrar = document.querySelector("#mostrar");
	mostrar.addEventListener('click',pintarDatos,false);
	cajadatos = document.querySelector("#cajadatos");

	
	clavebusqueda = document.querySelector("#clavebusqueda");
	clavebusqueda.addEventListener('input',comprobarBusqueda,false);
	buscar = document.querySelector("#buscar");
	buscar.addEventListener('click',pintarDato,false);
	cajadato = document.querySelector("#cajadato");
}

function comprobar(){
	/*var longClave = document.querySelector("#clave").value.length;
	var longValor = document.querySelector("#valor").value.length;
	*/
	var longClave = clave.value.length;
	var longValor = valor.value.length;
	if (longClave > 0 && longValor > 0){
		grabar.disabled=false;
	} else {
		grabar.disabled=true;
	}
}

function comprobarBusqueda(){
	if (clavebusqueda.value.length > 0){
		buscar.disabled=false;
	}
	else {
		buscar.disabled=true;
	}
}

function guardar(){
	//console.log("entro guardar");
	localStorage.setItem(clave.value,valor.value);
	//pintarDatos();
	//grabar.onload=function(){};
}

function pintarDatos(){
	var tam = localStorage.length;
	var k = "";
	var datos = "";
	for (var i=0; i<tam; i++){
		k = localStorage.key(i);
		datos += '<p>' + k + ": " + localStorage[k] + '</p>';
		//console.log(k + ":" + localStorage[k]);
	}
	cajadatos.innerHTML = datos;
}

function pintarDato(){
	var k = clavebusqueda.value;
	var v = "";
	v = localStorage.getItem(k);
	if (v !== null){
		var dato = '<p>' + k + ": " + v + '</p>';
		cajadato.innerHTML = dato;

	}
	else {
		alert("La clave: " + k + " no existe");
	}
}

window.addEventListener('load',inicio,false);