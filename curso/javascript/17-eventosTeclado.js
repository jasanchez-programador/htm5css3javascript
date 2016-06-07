window.onload = function(){
	//ERES internet explorer??
	var es_ie = navigator.userAgent.toLowerCase().indexOf('msie')!=-1;
	document.onkeypress = function(e) {
		var evento = window.event || e;
        if (es_ie){
        	tecla = String.fromCharCode(evento.keyCode);
		}
		else{
			tecla = String.fromCharCode(evento.charCode);
		}
        console.log("Se ha pulsado: " + tecla);
    };
}