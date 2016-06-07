// para poner en jsfiddle.net
function Hotel(n, h, r) {
  this.nombre = n;
  this.habitaciones = h;
  this.reservas = r;
  this.reservar = function(x) {
    var todos = true;
    for (var i = 1; i <= x; i++) {
      if (this.reservas + i <= this.habitaciones) {
        continue;
      } else {
        todos = false;
        break;
      }
    }
    if (todos === true) {
      this.reservas = this.reservas + x;
      console.log("reservadas " + x + " habitaciones");
    } else {
      console.log("no hay habitaciones suficientes");
    }
  };
  this.disponibilidad = function() {
    var quedan = this.habitaciones - this.reservas;
    return quedan;
  };
}

var hotel = new Hotel("sol", 10, 7);
console.log("disponibles: " + hotel.disponibilidad());
hotel.reservar(2);
console.log("disponibles: " + hotel.disponibilidad());
hotel.reservar(2);

// posteriormente podemos ampliar los atributos o metodos de una instancia concreta
/* 
Por ejemplo, incorporar el parametro estrellas 
e incorporar el metodo que devuelve cuantas hay
*/

hotel.estrellas = 3;
hotel.getEstrellas = function(){
  return this.estrellas;
}

console.log(hotel.nombre + " tiene " + hotel.getEstrellas() + " estrellas");
// Tambien podemos ampliar metodos a la clase
/* 
asi lo poseen todas las instancias
*/
Hotel.prototype.getHabitacionesTotales = function(){
  return this.habitaciones;
}

hotel2 = new Hotel("luna",15,5)
console.log(hotel.nombre + " tiene " + hotel.getHabitacionesTotales() + " habitaciones");
console.log(hotel2.nombre + " tiene " + hotel2.getHabitacionesTotales() + " habitaciones");

console.log("T: " + typeof hotel);
console.log("i: " + (hotel instanceof "Hotel") );