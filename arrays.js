// VARIABLE GLOBAL DE LUXON
const DateTime = luxon.DateTime;
const hoy = DateTime.now();
console.log(hoy.toLocaleString(DateTime.DATETIME_MED));

// VARIABLE PRECIOS

let valor2D = 700;
let valor3D = 800;
let valor4D = 1000;

// ARRAYS VACÍOS

let peliculas = [];
let candy = [];
let carrito = [];

// OBJETO PELÍCULA

class Pelicula {
  constructor(nombre, precio, idioma, funcion) {
    this.nombre = nombre;
    this.precio = precio;
    this.idioma = idioma;
    this.funcion = funcion;
  }
  /*  compraExitosa() {
    console.log(
      "Tus entradas de '" +
        this.nombre +
        "' para el " +
        this.funcion +
        " han sido reservadas con éxito."
    );
  }*/
}

// ARRAY DE PELÍCULAS

peliculas = [
  new Pelicula(
    "Encanto",
    valor2D,
    "Doblada",
    hoy.toLocaleString(DateTime.DATETIME_MED)
  ),
  new Pelicula("Encanto", valor2D, "Doblada", "Miércoles 19:00"),
  new Pelicula("Encanto", valor3D, "Doblada", "Jueves 14:00"),
  new Pelicula("Encanto", valor2D, "Doblada", "Viernes 19:00"),
  new Pelicula("Encanto", valor2D, "Doblada", "Sabado 14:00"),
  new Pelicula("Encanto", valor3D, "Doblada", "Domingo 14:00"),
  new Pelicula("Encanto", valor2D, "Doblada", "Domingo 19:00"),
  new Pelicula("Scream 5", valor2D, "Subtitulada", "Jueves 22:00"),
  new Pelicula("Scream 5", valor2D, "Doblada", "Viernes 21:00"),
  new Pelicula("Scream 5", valor2D, "Doblada", "Sabado 20:00"),
  new Pelicula("Scream 5", valor2D, "Subtitulada", "Sabado 23:00"),
  new Pelicula("La casa Gucci", valor2D, "Subtitulada", "Martes 19:00"),
  new Pelicula("La casa Gucci", valor2D, "Subtitulada", "Jueves 21:00"),
  new Pelicula("La casa Gucci", valor2D, "Subtitulada", "Viernes 21:00"),
  new Pelicula("La casa Gucci", valor2D, "Subtitulada", "Sabado 21:00"),
  new Pelicula("La casa Gucci", valor2D, "Subtitulada", "Domingo 18:00"),
  new Pelicula("Sing 2", valor2D, "Doblada", "Martes 19:00"),
  new Pelicula("Sing 2", valor2D, "Doblada", "Jueves 19:00"),
  new Pelicula("Sing 2", valor2D, "Doblada", "Viernes 17:00"),
  new Pelicula("Belle", valor2D, "Doblada", "Lunes 17:00"),
  new Pelicula("Belle", valor2D, "Subtitulada", "Miércoles 20:00"),
  new Pelicula("Belle", valor2D, "Doblada", "Viernes 20:00"),
  new Pelicula("Boda negra", valor2D, "Subtitulada", "Jueves 23:00"),
  new Pelicula("Boda negra", valor2D, "Subtitulada", "Viernes 23:00"),
  new Pelicula("El Padrino", valor2D, "Subtitulada", "Jueves 14:00"),
  new Pelicula("El Padrino", valor2D, "Subtitulada", "Viernes 22:00"),
  new Pelicula("El Padrino", valor2D, "Subtitulada", "Domingo 21:00"),
  new Pelicula("El Padrino II", valor2D, "Subtitulada", "Jueves 18:00"),
  new Pelicula("El Padrino II", valor2D, "Subtitulada", "Sabado 22:00"),
  new Pelicula("El Padrino II", valor2D, "Subtitulada", "Domingo 20:00"),
  new Pelicula("El Padrino III", valor2D, "Subtitulada", "Jueves 22:00"),
  new Pelicula("El Padrino III", valor2D, "Subtitulada", "Domingo 22:00"),
  new Pelicula("Matrix", valor2D, "Subtitulada", "Miércoles 20:00"),
  new Pelicula("Matrix", valor2D, "Doblada", "Jueves 22:00"),
  new Pelicula("Matrix", valor2D, "Doblada", "Viernes 20:00"),
  new Pelicula("Matrix", valor3D, "Subtitulada", "Viernes 23:00"),
  new Pelicula("Matrix", valor4D, "Subtitulada", "Sabado 21:00"),
  new Pelicula("Spiderman", valor2D, "Doblada", "Lunes 19:00"),
  new Pelicula("Spiderman", valor2D, "Subtitulada", "Miércoles 20:00"),
  new Pelicula("Spiderman", valor3D, "Doblada", "Jueves 18:00"),
  new Pelicula("Spiderman", valor2D, "Subtitulada", "Viernes 19:00"),
  new Pelicula("Spiderman", valor2D, "Doblada", "Sabado 16:00"),
  new Pelicula("Spiderman", valor3D, "Subtitulada", "Sabado 22:00"),
  new Pelicula("Spiderman", valor3D, "Doblada", "Domingo 14:00"),
  new Pelicula("Spiderman", valor4D, "Doblada", "Domingo 19:00"),
];

// OBJETO CANDY

class Candy {
  constructor(nombre, precio, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
  }
}

let comboIndividual = new Candy("Combo Individual", 600, 1);
let comboNachos = new Candy("Combo Nachos", 750, 2);
let comboPareja = new Candy("Combo Pareja", 1100, 3);
let papas = new Candy("Papas fritas", 300, 4);
let sugus = new Candy("Sugus confitados", 150, 5);

candy.push(comboIndividual);
candy.push(comboNachos);
candy.push(comboPareja);
candy.push(papas);
candy.push(sugus);
