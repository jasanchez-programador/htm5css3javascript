window.onload = function(){
	var boton = document.getElementsByTagName("input");
	boton[0].onclick = function(){
		var p = document.createElement("p");
		var texto = document.createTextNode("hola mundo !!");
		p.appendChild(texto);
		boton[0].parentNode.appendChild(p);
	};

}