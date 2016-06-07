
self.onmessage = function(sms){
	if ( sms.data.cmd === "saludar"){
		self.postMessage("hola " + sms.data.quien);
	}

	if ( sms.data.cmd === "despedir"){
		self.postMessage("adios " + sms.data.quien);
	}
};