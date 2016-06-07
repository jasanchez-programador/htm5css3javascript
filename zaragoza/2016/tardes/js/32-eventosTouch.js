$(document).ready(function(){
	var x = 0;
	var y = 0;

	$(document).on("touchstart",function(dedos){
		var dedo = dedos.originalEvent.targetTouches[0];
		x = dedo.pageX;
		y = dedo.pageY;

		console.log("INICIO POS: (" + x +","+y+")");
	})


	$(document).on("touchmove",function(dedos){
		var mX = "";
		var mY = "";
		var dedo = dedos.originalEvent.targetTouches[0];
		
		if ( x <  dedo.pageX ){
			mX = "derecha";
		}
		else if ( x > dedo.pageX ){
			mX = "izquierda"
		}
		else{
			mx = "centro"
		}

		if ( y <  dedo.pageY ){
			mY = "abajo";
		}
		else if ( y > dedo.pageY ){
			mY = "arriba"
		}
		else{
			mY = "centro"
		}

		console.log("movido hacia: " + mX+","+mY);
	})	
});