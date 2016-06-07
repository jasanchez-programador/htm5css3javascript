function mostrarAlClick(){
	alert('hizo click');
}

function mostrarAlPasar(){
	alert('se puso el raton encima');
}

function conRaton(){
	/* con querySelector podemos usar la misma sintaxis que en CSS3
	Si hay varios elementos aplicables en html SOLO SE APLICARA AL PRIMERO 
	*/
	// document.getElementsByTagName('input')[0].onclick=mostrarAlClick;
	// para el primer elemento <input> hijo de otro elemento con id="principal"
	document.querySelector('#principal > input:first-child').onclick=mostrarAlClick;
	// document.getElementsByTagName('input')[1].onmouseover=mostrarAlPasar;
	// para el segundo elemento <input>, EMPEZANDO POR 1, hijo de otro elemento con id="principal"
	document.querySelector('#principal > input:nth-child(2)').onmouseover=mostrarAlPasar;

	/*
	con querySelectorAll podemos usar la misma sintaxis que en CSS3
	Si hay varios elementos aplicables en html SE GUARDAN EN UN ARRAY, EMPEZANDO POR 0
	*/
	var inputSecundario = document.querySelectorAll('#secundario > input');
	inputSecundario[0].onclick=mostrarAlClick;
	inputSecundario[1].onmouseover=mostrarAlPasar;
	/* IMPORTANTE
	<body> <div> <input>
	aunque el click se hace en <input> tambien se esta haciendo al <div> y <body>
	*/

}

window.onload = conRaton;