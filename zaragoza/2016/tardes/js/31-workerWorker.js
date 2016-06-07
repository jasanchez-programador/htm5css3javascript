
self.onmessage = function(sms_main){
	if ( sms_main.data.cmd === "saludar") {
		self.postMessage("HOLA " + sms_main.data.quien);
	}
	else if (sms_main.data.cmd === "despedir") {
		self.postMessage("ADIOS " + sms_main.data.quien);
	}
}