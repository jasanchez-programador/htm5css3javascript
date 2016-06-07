window.onload = function() {
	var boton = document.getElementsByTagName("input");
	boton[0].onclick=function(){
		var miP = document.createElement("p");
		var textoP = document.createTextNode("hola Mundo!!");
		miP.appendChild(textoP);
		miP.setAttribute("style","color: Orange; background-color: black");
		boton[0].parentNode.appendChild(miP);
	};
};
