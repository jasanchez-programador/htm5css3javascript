// para poner en jsfiddle.net
// las propiedades no estan ocultas

// Se pueden crear diferentes instancias del objeto

// this hara referencia a las propiedades y metodos de cada instancia creada con new

// se puede hacer uso de prototype para, a posteriori, 
// incrementar las funciones de la clase 
// que tendran disponibles las instancias, aunque se crearan antes
window.onload=function(){
  function Hotel(n, h, r) {
    // sin var y con this los atributos estan disponibles desde fuera
    this.nombre = n;
    this.habitaciones = h;
    this.reservas = r;
  }
  // La funcion se comparte entre todas las instancias de Hotel
  Hotel.prototype.reservar = function(x) {
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

  Hotel.prototype.disponibilidad = function() {
    var quedan = this.habitaciones - this.reservas;
    return quedan;
  };

  // si no ponemos new, las propiedades del hotel son GLOBALES y pertenecen al objeto window
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

  Hotel.prototype.setEstrellas = function(e){
    this.estrellas = e;
  }
  Hotel.prototype.getEstrellas = function(){
    return this.estrellas;
  }
  // si no le pones new, no tiene prototipo y
  // por tanto no es de ninguna clase
  // no puedes usar prototype para ampliar parametros o metodos
  hotel2 = new Hotel("luna",15,3);

  hotel.setEstrellas(3);
  console.log(hotel.nombre + " tiene " + hotel.getEstrellas() + " estrellas");

  hotel2.setEstrellas(4);
  // Si no usas set estrellas para crear el atributo,
  // esta instancia no tendra estrellas!!!!
  console.log(hotel2.nombre + " tiene " + hotel2.getEstrellas() + " estrellas");
  // Tambien podemos ampliar metodos a la clase
  /* 
  asi lo poseen todas las instancias
  */
  Hotel.prototype.getHabitacionesTotales = function(){
    return this.habitaciones;
  };

  console.log(hotel.nombre + " tiene " + hotel.getHabitacionesTotales() + " habitaciones");
  console.log(hotel2.nombre + " tiene " + hotel2.getHabitacionesTotales() + " habitaciones");

  console.log("T: " + typeof hotel);
  var clase = hotel instanceof Hotel;
  console.log("i: " + clase );


  //HERENCIA 
  function HotelAvanzado(n,h,r,e){
    //llamamos al constructor Padre, QUIEN ES? sera Hotel
    Hotel.call(this,n,h,r);
    this.estrellas = e;
  }
  // para heredar los metodos de hotel ESTABLECEMOS PADRE
  HotelAvanzado.prototype = Object.create(Hotel.prototype);
  // Para que el objeto sea HotelAvanzado
  HotelAvanzado.prototype.constructor = HotelAvanzado;
  HotelAvanzado.prototype.verEstrellas = function(){
    return this.estrellas;
  };


  var hotav = new HotelAvanzado("sol",20,15,5);
  console.log(hotav.nombre + " tiene " + hotav.verEstrellas() 
    + " Estrellas" + " y " + hotav.getHabitacionesTotales() + " dispobibles");

  console.log("T: " + typeof hotav);
  var clase1 = hotel instanceof Hotel;
  var clase2 = hotel instanceof HotelAvanzado;
  console.log("clase Hotel: " + clase );
  console.log("clase HotelAvanzado: " + clase );

}