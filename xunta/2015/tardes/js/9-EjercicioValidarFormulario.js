window.onload = function(){
	var inputPass = document.getElementById('pass');
	// array para comprobar si la contraseña tiene un número
	var numeros = "1234567890";
	var siNum = false;
	var siMay = false;

	// al perder el foco la contraseña
	inputPass.onblur = function(){
		var pass = inputPass.value;
		// comprobar si hay una mayuscula
		if ( pass.search("[A-Z]")  >= 0 ){
				siMay = true;
		}
		// comprobar si hay un numero
		for (var i=0; i<=pass.length;i++){
			if ( siNum === false && numeros.indexOf(pass[i]) >= 0 ){
				siNum = true;
				break;
			}
		}
		/* si falta un numero o una mayuscula
		muestro una alerta indicandolo y pasado 1 segundo
		le devuelvo el foco vaciando la contraseña
		*/
		if ( siNum === false || siMay === false ){
			alert("falta una mayúscula o número");
			setTimeout(function(){
				inputPass.focus();
				inputPass.value="";
			},1);	
		}
	}
	// deshabilitar el boton y poner nombre enviando al enviar
	var enviar = document.getElementById("enviar");
	enviar.onclick = function(){
		this.setAttribute("disabled","disabled");
		this.setAttribute("value","enviando");
	}
}