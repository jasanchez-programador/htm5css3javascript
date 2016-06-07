function inicio(){
	var boton = document.getElementsByTagName("input");
	boton[0].onclick=function(){
		var miP = document.createElement("p");
		var textoP = document.createTextNode("hola Mundo!!");
		miP.appendChild(textoP);
		boton[0].parentNode.appendChild(miP);
	};
}
window.onload=inicio;