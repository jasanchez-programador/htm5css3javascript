// El worker espera recibir un mensaje para hacer su trabajo
// en este caso: 
// Recoger objeto JSON
// dependiendo del valor para la clave cmd:
// saluda (viene del boton saludar) 
// se despide (viene del boton despedir)
self.onmessage = function(sms){
	if ( sms.data.cmd === 'saludar'){
		self.postMessage("Hola " + sms.data.quien ); 	
	}
	if ( sms.data.cmd === 'despido'){
		self.postMessage("Adios " + sms.data.quien ); 	
	}
};

