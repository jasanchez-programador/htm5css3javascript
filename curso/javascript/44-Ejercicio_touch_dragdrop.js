$(document).ready(function(){
  var objeto = $('div#mueveme');
  var objetoX = 0;
  var objetoY = 0;

  // mover objeto
  objeto.on('touchmove mousedown', function(dedos){
    //console.log("movido");
    if (dedos.type == "touchmove"){
      if (dedos.originalEvent.touches.length > 0){
        var dedo = dedos.originalEvent.touches[0];
        objetoX = dedo.pageX + "px" ;
        objetoY = dedo.pageY + "px" ;
        var nuevaPos_css = {
          'left' : objetoX,
          'top' : objetoY
        };
        objeto.css(nuevaPos_css);
      }
    }
    if (dedos.type == "mousedown"){
      objeto.on('mousemove',function(d){
        objetoX = d.pageX + "px" ;
        objetoY = d.pageY + "px" ;
        var nuevaPos_css = {
          'left' : objetoX,
          'top' : objetoY
        };
        objeto.css(nuevaPos_css);
      });
    }
    
  });

  //pintar en canvas con el dedo
  var canvas = $('#canvas');
  var lienzo = canvas[0].getContext('2d');
  canvas.on('touchmove mousedown',function(event){
    //para todos los dedos
    for (var i=0; i< event.originalEvent.touches.length; i++){
      var dedo = event.originalEvent.touches[i];
      lienzo.beginPath();
      lienzo.arc(dedo.pageX, dedo.pageY, 5, 0, 360);
      lienzo.fill();
      lienzo.closePath();
    }
  });


});