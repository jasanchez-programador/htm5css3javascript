function inicio(){
	/* 
	añadir nuevo parrafo a la pagina
	*/
	// PRIMERO: creamos elemento <p>
	var miParrafo = document.createElement("p");
	// SEGUNDO: añadimos atributo name
	miParrafo.setAttribute("name","mip");
	//TERCERO: creamos elemento texto
	var contenido = document.createTextNode("hola mundo");
	// CUARTO: añadir texto al parrafo
	miParrafo.appendChild(contenido);
	// QUINTO: añadir parrafo al final del body
	document.body.appendChild(miParrafo);


	/*
SEGUNDO añadir boton entre 2 parrafos
	*/
	// PRIMERO: quien es el padre de mi parrafo
	var padreMiParrafo = miParrafo.parentNode;
	// SEGUNDO: crear boton
	var boton = document.createElement("input");
	boton.setAttribute("type","button");
	boton.setAttribute("name","boton");
	boton.setAttribute("value","boton");
	// TERCERO: insertarlo
	padreMiParrafo.insertBefore(boton,miParrafo);


	/*
Modificar el color del parrafo insertado
	*/
	// PRIMERO: Crear nuevo parrafo
	var nuevoParrafo = document.createElement("p");
	nuevoParrafo.setAttribute("name","nuevoP");
	nuevoParrafo.setAttribute("style","color: Orange");
	var nuevoTexto = document.createTextNode("nuevo Texto");
	nuevoParrafo.appendChild(nuevoTexto);
	// SEGUNDO: sustituir desde el padre
	padreMiParrafo.replaceChild(nuevoParrafo,miParrafo);


	/*
Quitar el parrafo inicial
	*/
	// PRIMERO: quitar el parrafo inicial
	var parrafo = document.getElementsByTagName("p")
	parrafo[0].parentNode.removeChild(parrafo[0]);

	/*
Modificar el estilo del parrafo que queda envolviendolo en <h1> y 
color de fondo negro
	*/
	// PRIMERO: incluir cabecera <h1>
	var queEs = nuevoParrafo.innerHTML;
	nuevoParrafo.innerHTML = '<h1>' + queEs + '</h1>';
	// actualizamos el estilo del parrafo
	var miParrafoMod = document.getElementsByName("nuevoP")[0];
	if (miParrafoMod.hasAttribute("style")){
		var valorAttrActual = miParrafoMod.getAttribute("style");
		var valorAttrIncluir =  "; background: black;";
		var valorAttr = valorAttrActual + valorAttrIncluir;
		miParrafoMod.setAttribute("style", valorAttr);
	}
}
window.onload=inicio;