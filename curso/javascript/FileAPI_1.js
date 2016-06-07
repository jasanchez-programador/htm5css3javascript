$(document).ready(function(){
	if (window.File && window.FileReader && window.FileList && window.Blob) {
    	console.log("File API soportada por el navegador");
	} else {
    	alert('The File APIs are not fully supported in this browser.');
	}
	
	console.log("cargada");
	//debugger;
	/*
	type file para que el usuario pueda elegir un fichero
	*/
	var fichero = document.getElementById("fichero");

	/* 
	Al cambiar(elegir imagen):
		-- creo un lector de fichero
		-- Escucho en el evento de cargar un fichero:
			-- lo recibo como argumento en formato URL
			-- selecciono <img> y actualizo su atributo src
	*/
	var fichFoto = null;
	fichero.onchange = function(e){
//		console.log("entro onchange");
		var arch = new FileReader();
        arch.onload = function(e2){
//        	console.log("entro onload");
        	// para tener la url de la foto disponible para guardarla
        	fichFoto = e2.target.result;
        	document.getElementById('i').setAttribute("src", e2.target.result);
        }
        arch.readAsDataURL(e.target.files[0]);
	}

	// indice para componer el nombre del fichero
	var i = 0;

	// al hacer click en guardar, guardo la imagen en el S.F. virtual!!!
	$('button#guardar').on('click',function(fs){
		i += 1;
		var nombreFich = "imagen" + i + ".jpg";
		console.log("nombre " + nombreFich);
		// ruta a la foto
		//console.log("fichFoto: "+ fichFoto);
		window.webkitRequestFileSystem(window.PERSISTENT, 100*1024 /*100kB*/, 
			function(fs){
				console.log("1 ");
				fs.root.getFile('imagen1.jpg', { create: true, exclusive: true}, 
				//fs.root.getFile(nombreFich, {'create': true}, 
					function(fileEntry) {
		    			console.log("2");
	        			/*fileEntry.createWriter(function(fileWriter) {
	        				console.log("3");
		          			fileWriter.onwriteend = function(event) {
		            			console.log("fichFoto: " + fichFoto);
		          			}
			          		var blob = new Blob([fichFoto], { type: 'image/jpeg' } )
			          		fileWriter.write(blob);
			          		console.log("fin");
		        		})*/
        			},
        			function(fs){
						console.log("ERROR getFile: " + fs.name + "--" + fs.message)
					}
        		)
			},
			function(fs){
				console.log("ERROR webkitRequestFileSystem: " + fs.error)
			}
		);	
	})
})