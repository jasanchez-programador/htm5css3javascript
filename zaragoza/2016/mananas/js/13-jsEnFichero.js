window.onload = function(){
	var boton = document.getElementsByTagName("input");
	boton[0].onclick = function () {
		var mip = document.createElement('p');
		var texto = document.createTextNode('Hola mundo');
		mip.appendChild(texto);
		boton[0].parentNode.appendChild(mip);
	}
}