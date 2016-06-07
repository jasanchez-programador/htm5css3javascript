// para poner en jsfiddle.net
// no se puede hacer uso de this ni prototype porque los parametros estan ocultos
// NO ES HABITUAL, es intentar transformarlo en JAVA!!!!
// No se puede trasladar el uso de prototype con las variables ocultas!!!
window.onload = function() {
  function Hotel(n, h, r) {
    // con var los atributos no son accesibles directamente
    var nombre = n;
    var habitaciones = h;
    var reservas = r;
    this.reservar = function(x) {
      var todos = true;
      for (var i = 1; i <= x; i++) {
        if (reservas + i <= habitaciones) {
          continue;
        } else {
          todos = false;
          break;
        }
      }
      if (todos === true) {
        reservas = reservas + x;
        console.log("reservadas " + x + " habitaciones");
      } else {
        console.log("no hay habitaciones suficientes");
      }
    };
    this.disponibilidad = function() {
      var quedan = habitaciones - reservas;
      return quedan;
    };
}
  //debugger;
  var hotel = new Hotel("sol", 10, 7);
  console.log("disponibles: " + hotel.disponibilidad());
  hotel.reservar(2);
  console.log("disponibles: " + hotel.disponibilidad());
  hotel.reservar(2);

  console.log("T: " + typeof hotel);
  var clase = hotel instanceof Hotel;
  console.log("i: " + clase);

 // PROTOTYPE con los atributos ocultos(definidos con var)
 // NO SE PUEDE USAR!!!! 



}