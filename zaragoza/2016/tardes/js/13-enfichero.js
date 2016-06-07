window.onload = function(){
	document.getElementsByTagName('input')[0].onclick = function () {
		var mip = document.createElement('p');
		var texto = document.createTextNode('Hola mundo');
		mip.appendChild(texto);
		document.getElementsByTagName('input')[0].parentNode.appendChild(mip);
	}
};
