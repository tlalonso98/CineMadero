// ARRAYS VACÍOS
let peliculas = [];
let candy = [];
let carrito = [];

// OBJETO PELÍCULA
class Pelicula {
  constructor(nombre, idioma, funcion, sala) {
    this.nombre = nombre;
    this.idioma = idioma;
    this.funcion = funcion;
    this.precio = precio;
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

let encanto1 = new Pelicula("Encanto", "Doblada", "Lunes 19:00", "2D");
let encanto2 = new Pelicula("Encanto", "Doblada", "Miércoles 19:00", "2D");
let encanto3 = new Pelicula("Encanto", "Doblada", "Jueves 14:00", "3D");
let encanto4 = new Pelicula("Encanto", "Doblada", "Viernes 19:00", "2D");
let encanto5 = new Pelicula("Encanto", "Doblada", "Sabado 14:00", "2D");
let encanto6 = new Pelicula("Encanto", "Doblada", "Domingo 14:00", "3D");
let encanto7 = new Pelicula("Encanto", "Doblada", "Domingo 19:00", "2D");

let scream1 = new Pelicula("Scream 5", "Subitulada", "Jueves 22:00", "2D");
let scream2 = new Pelicula("Scream 5", "Doblada", "Viernes 21:00", "2D");
let scream3 = new Pelicula("Scream 5", "Doblada", "Sabado 20:00", "2D");
let scream4 = new Pelicula("Scream 5", "Subitulada", "Sabado 23:00", "2D");

let gucci1 = new Pelicula("La casa Gucci", "Subitulada", "Martes 19:00", "2D");
let gucci2 = new Pelicula("La casa Gucci", "Subitulada", "Jueves 21:00", "2D");
let gucci3 = new Pelicula("La casa Gucci", "Subitulada", "Viernes 21:00", "2D");
let gucci4 = new Pelicula("La casa Gucci", "Subitulada", "Sabado 21:00", "2D");
let gucci5 = new Pelicula("La casa Gucci", "Subitulada", "Domingo 18:00", "2D");

let sing1 = new Pelicula("Sing 2", "Doblada", "Martes 19:00", "2D");
let sing2 = new Pelicula("Sing 2", "Doblada", "Jueves 19:00", "2D");
let sing3 = new Pelicula("Sing 2", "Doblada", "Viernes 17:00", "2D");

let belle1 = new Pelicula("Belle", "Doblada", "Lunes 17:00", "2D");
let belle2 = new Pelicula("Belle", "Subitulada", "Miércoles 20:00", "2D");
let belle3 = new Pelicula("Belle", "Doblada", "Viernes 20:00", "2D");

let bodaNegra1 = new Pelicula("Boda negra", "Subitulada", "Jueves 23:00", "2D");
let bodaNegra2 = new Pelicula(
  "Boda negra",
  "Subitulada",
  "Viernes 23:00",
  "2D"
);

let padrino1 = new Pelicula("El Padrino", "Subitulada", "Jueves 14:00", "2D");
let padrino2 = new Pelicula("El Padrino", "Subitulada", "Viernes 22:00", "2D");
let padrino3 = new Pelicula("El Padrino", "Subitulada", "Domingo 21:00", "2D");

let padrinoII1 = new Pelicula(
  "El Padrino II",
  "Subitulada",
  "Jueves 18:00",
  "2D"
);
let padrinoII2 = new Pelicula(
  "El Padrino II",
  "Subitulada",
  "Sabado 22:00",
  "2D"
);
let padrinoII3 = new Pelicula(
  "El Padrino II",
  "Subitulada",
  "Domingo 20:00",
  "2D"
);

let padrinoIII1 = new Pelicula(
  "El Padrino III",
  "Subitulada",
  "Jueves 22:00",
  "2D"
);
let padrinoIII2 = new Pelicula(
  "El Padrino III",
  "Subitulada",
  "Domingo 22:00",
  "2D"
);

let matrix1 = new Pelicula("Matrix", "Subitulada", "Miércoles 20:00", "2D");
let matrix2 = new Pelicula("Matrix", "Doblada", "Jueves 22:00", "2D");
let matrix3 = new Pelicula("Matrix", "Doblada", "Viernes 20:00", "2D");
let matrix4 = new Pelicula("Matrix", "Subitulada", "Viernes 23:00", "2D");
let matrix5 = new Pelicula("Matrix", "Subitulada", "Sabado 21:00", "2D");

let spiderman1 = new Pelicula("Spiderman", "Doblada", "Lunes 19:00", "2D");
let spiderman2 = new Pelicula(
  "Spiderman",
  "Subitulada",
  "Miércoles 20:00",
  "2D"
);
let spiderman3 = new Pelicula("Spiderman", "Doblada", "Jueves 18:00", "3D");
let spiderman4 = new Pelicula("Spiderman", "Subitulada", "Viernes 19:00", "2D");
let spiderman5 = new Pelicula("Spiderman", "Doblada", "Sabado 16:00", "2D");
let spiderman6 = new Pelicula("Spiderman", "Subitulada", "Sabado 22:00", "3D");
let spiderman7 = new Pelicula("Spiderman", "Doblada", "Domingo 14:00", "3D");
let spiderman8 = new Pelicula("Spiderman", "Doblada", "Domingo 19:00", "2D");

// OBJETO CANDY

class Candy {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

let comboIndividual = new Candy("Combo Individual", 600);
let comboNachos = new Candy("Combo Nachos", 750);
let comboPareja = new Candy("Combo Pareja", 1100);
let papas = new Candy("Papas fritas", 300);
let sugus = new Candy("Sugus confitados", 150);

// PUSHEO DE ARRAYS

peliculas.push(encanto1);
peliculas.push(encanto2);
peliculas.push(encanto3);
peliculas.push(encanto4);
peliculas.push(encanto5);
peliculas.push(encanto6);
peliculas.push(encanto7);
peliculas.push(scream1);
peliculas.push(scream2);
peliculas.push(scream3);
peliculas.push(scream4);
peliculas.push(gucci1);
peliculas.push(gucci2);
peliculas.push(gucci3);
peliculas.push(gucci4);
peliculas.push(gucci5);
peliculas.push(sing1);
peliculas.push(sing2);
peliculas.push(sing3);
peliculas.push(belle1);
peliculas.push(belle2);
peliculas.push(belle3);
peliculas.push(bodaNegra1);
peliculas.push(bodaNegra2);
peliculas.push(padrino1);
peliculas.push(padrino2);
peliculas.push(padrino3);
peliculas.push(padrinoII1);
peliculas.push(padrinoII2);
peliculas.push(padrinoII3);
peliculas.push(padrinoIII1);
peliculas.push(padrinoIII2);
peliculas.push(matrix1);
peliculas.push(matrix2);
peliculas.push(matrix3);
peliculas.push(matrix4);
peliculas.push(matrix5);
peliculas.push(spiderman1);
peliculas.push(spiderman2);
peliculas.push(spiderman3);
peliculas.push(spiderman4);
peliculas.push(spiderman5);
peliculas.push(spiderman6);
peliculas.push(spiderman7);
peliculas.push(spiderman8);

candy.push(comboIndividual);
candy.push(comboNachos);
candy.push(comboPareja);
candy.push(papas);
candy.push(sugus);
