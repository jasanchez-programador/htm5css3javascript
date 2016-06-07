$(document).ready(function(){
	var operando1 = null;
	var operando2 = null;
	var resultado = null;
	var donde = null;
	var anterior = null;
	var veo = $('input#resultado');

	$('button.num').on('click',function(){
		$('div').css('box-shadow', 'white 0px 0px 0px');
		veo.val(veo.val() +  $(this).val());
		
		if (donde === "operando1"){
			operando1 = veo.val();
		}
		if (donde === "operando2"){
			operando2 = veo.val();
		}
		if ( donde === null){
			donde = "operando1";
			operando1 = veo.val();
		}
		
	});
	$('button.operacion').on('click',function(){
		if (donde === "operando2"){
			if (anterior === "+"){
				operando1 = (parseFloat(operando1) + parseFloat(operando2));
			}
			if (anterior === "-"){
				operando1 = (parseFloat(operando1) - parseFloat(operando2));
			}
			if (anterior === "*"){
				operando1 = (parseFloat(operando1) * parseFloat(operando2));
			}
			if (anterior === "/"){
				operando1 = (parseFloat(operando1) / parseFloat(operando2));
			}
			anterior = $(this).val();
			operando2 = null;
			veo.val("");
		}
		if (donde === "operando1"){
			anterior = $(this).val();
			donde = "operando2";
			veo.val("");
		}
	});

	$('button.igual').on('click',function(){
		if (anterior === "+"){
			resultado = (parseFloat(operando1) + parseFloat(operando2));
		}
		if (anterior === "-"){
			resultado = (parseFloat(operando1) - parseFloat(operando2));
		}
		if (anterior === "*"){
			resultado = (parseFloat(operando1) * parseFloat(operando2));
		}
		if (anterior === "/"){
			resultado = (parseFloat(operando1) / parseFloat(operando2));
		}
		veo.val(resultado);
		operando1 = resultado;
		operando2 = null;
		resultado = null;
		donde = "operando2";
		anterior = null;
	});
	$('button.borraruno').on('click',function(){
		var numeros = veo.val().split("");
		numeros.pop();
		veo.val("");
		for (var i=0; i<numeros.length; i++){
			veo.val(veo.val() + numeros[i]);
		}
		if (donde === "operando1"){
			operando1 = veo.val();
		}
		else{
			if ( donde === "operando2"){
				operando2 = veo.val();
			}
		}

	});
	
	$('button.borrartodo').on('click',function(){
		console.log("pulsado span borrartodo: ");
		operando1 = null;
		operando2 = null;
		resultado = null;
		donde = null;
		anterior = null;
		veo.val("");
	});

});