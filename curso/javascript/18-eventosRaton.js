window.onload = function(){
	//ERES internet explorer??
	var es_ie = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;
	document.onclick = function(e) {
		var evento = window.event || e;
		var posicionPantallaX = evento.screenX;
		var posicionPantallaY = evento.screenY;
		var posicionNavegadorX = evento.clientX;
		var posicionNavegadorY = evento.clientY;
		var posicionPagina;
        if (es_ie){
        	posicionPaginaX = evento.clientX + document.body.scrollLeft;
			posicionPaginaY = evento.clientY + document.body.scrollTop;
		}
		else{
			posicionPaginaX = evento.pageX;
			posicionPaginaY = evento.pageY;
		}
        console.log("coordenadas en LA PANTALLA: (" + posicionPantallaX + "," + posicionPantallaY + ")");
        console.log("coordenadas en EL NAVEGADOR: (" + posicionNavegadorX + "," + posicionNavegadorY + ")");
        console.log("coordenadas en LA PAGINA: (" + posicionPaginaX + "," + posicionPaginaY + ")");
    };
}