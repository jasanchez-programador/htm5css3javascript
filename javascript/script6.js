function mostrarAlClick(){
	alert('hizo click');
}

function mostrarAlPasar(){
	alert('se puso el raton encima');
}

function conRaton(){
	var botonPrincipal = document.querySelectorAll('#principal > input');
	botonPrincipal[0].addEventListener('click',mostrarAlClick,false);
	botonPrincipal[1].addEventListener('mouseover',mostrarAlPasar,false);
	// addEventListener(ACCION, CODIGO_A_EJECUTAR, NO_AFECTE_ETIQUETAS_PADRE)
	/* IMPORTANTE
	<body> <div> <input>
	aunque el click se hace en <input> tambien se esta haciendo al <div> y <body>
	con addEventListener a false se invierte para que solo afecte al <input>
	*/

	var botonSecundario = document.querySelectorAll('#secundario > input');
	botonSecundario[0].addEventListener('click',mostrarAlClick,false);
	botonSecundario[1].addEventListener('mouseover',mostrarAlPasar,false);

}

window.addEventListener('load',conRaton,false);