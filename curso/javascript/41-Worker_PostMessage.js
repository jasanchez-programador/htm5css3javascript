// El worker espera recibir un mensaje para hacer su trabajo
// en este caso: 
// Recoger la cadena pasada, añadir palabra worker y devolverlo
self.onmessage = function(sms){	
	self.postMessage("hola " + sms.data); 
};

