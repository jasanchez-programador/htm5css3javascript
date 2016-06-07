window.onload = function(){

	var pass = document.getElementById("pass");
	var ns = '0123456789';

	var siNum = false;
	var siMay = false;

	pass.onblur = function(){
		var passAct = pass.value;
		// recorro la contraseña actual caracter a caracter
		for (var c=0; c<passAct.length; c++){
			// si el caracter esta en los numeros
			if ( ns.indexOf(c) >= 0 ){
				siNum = true;
				break;
			} 
		}

		// funcion search para usar patrones
		if ( passAct.search("[A-Z]") >= 0){
			siMay = true
		}

		// Si no hay mayuscula y numero 
		// alerto y devuelvo el foco
		if ( siNum === false || siMay === false){
			alert("Falta Mayuscula o Número, contraseña insegura");
			pass.value="";
			pass.focus();

			// setTimeout(function(){
			// 	pass.value="";
			// 	pass.focus();
			// },1000);

		}
	}

}