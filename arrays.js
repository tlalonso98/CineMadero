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

let encanto1 = new Pelicula("Encanto", valor2D, "Doblada", "Lunes 19:00");
let encanto2 = new Pelicula("Encanto", valor2D, "Doblada", "Miércoles 19:00");
let encanto3 = new Pelicula("Encanto", valor3D, "Doblada", "Jueves 14:00");
let encanto4 = new Pelicula("Encanto", valor2D, "Doblada", "Viernes 19:00");
let encanto5 = new Pelicula("Encanto", valor2D, "Doblada", "Sabado 14:00");
let encanto6 = new Pelicula("Encanto", valor3D, "Doblada", "Domingo 14:00");
let encanto7 = new Pelicula("Encanto", valor2D, "Doblada", "Domingo 19:00");

let scream1 = new Pelicula("Scream 5", valor2D, "Subtitulada", "Jueves 22:00");
let scream2 = new Pelicula("Scream 5", valor2D, "Doblada", "Viernes 21:00");
let scream3 = new Pelicula("Scream 5", valor2D, "Doblada", "Sabado 20:00");
let scream4 = new Pelicula("Scream 5", valor2D, "Subtitulada", "Sabado 23:00");

let gucci1 = new Pelicula(
  "La casa Gucci",
  valor2D,
  "Subtitulada",
  "Martes 19:00"
);
let gucci2 = new Pelicula(
  "La casa Gucci",
  valor2D,
  "Subtitulada",
  "Jueves 21:00"
);
let gucci3 = new Pelicula(
  "La casa Gucci",
  valor2D,
  "Subtitulada",
  "Viernes 21:00"
);
let gucci4 = new Pelicula(
  "La casa Gucci",
  valor2D,
  "Subtitulada",
  "Sabado 21:00"
);
let gucci5 = new Pelicula(
  "La casa Gucci",
  valor2D,
  "Subtitulada",
  "Domingo 18:00"
);

let sing1 = new Pelicula("Sing 2", valor2D, "Doblada", "Martes 19:00");
let sing2 = new Pelicula("Sing 2", valor2D, "Doblada", "Jueves 19:00");
let sing3 = new Pelicula("Sing 2", valor2D, "Doblada", "Viernes 17:00");

let belle1 = new Pelicula("Belle", valor2D, "Doblada", "Lunes 17:00");
let belle2 = new Pelicula("Belle", valor2D, "Subtitulada", "Miércoles 20:00");
let belle3 = new Pelicula("Belle", valor2D, "Doblada", "Viernes 20:00");

let bodaNegra1 = new Pelicula(
  "Boda negra",
  valor2D,
  "Subtitulada",
  "Jueves 23:00"
);
let bodaNegra2 = new Pelicula(
  "Boda negra",
  valor2D,
  "Subtitulada",
  "Viernes 23:00"
);

let padrino1 = new Pelicula(
  "El Padrino",
  valor2D,
  "Subtitulada",
  "Jueves 14:00"
);
let padrino2 = new Pelicula(
  "El Padrino",
  valor2D,
  "Subtitulada",
  "Viernes 22:00"
);
let padrino3 = new Pelicula(
  "El Padrino",
  valor2D,
  "Subtitulada",
  "Domingo 21:00"
);

let padrinoII1 = new Pelicula(
  "El Padrino II",
  valor2D,
  "Subtitulada",
  "Jueves 18:00"
);
let padrinoII2 = new Pelicula(
  "El Padrino II",
  valor2D,
  "Subtitulada",
  "Sabado 22:00"
);
let padrinoII3 = new Pelicula(
  "El Padrino II",
  valor2D,
  "Subtitulada",
  "Domingo 20:00"
);

let padrinoIII1 = new Pelicula(
  "El Padrino III",
  valor2D,
  "Subtitulada",
  "Jueves 22:00"
);
let padrinoIII2 = new Pelicula(
  "El Padrino III",
  valor2D,
  "Subtitulada",
  "Domingo 22:00"
);

let matrix1 = new Pelicula("Matrix", valor2D, "Subtitulada", "Miércoles 20:00");
let matrix2 = new Pelicula("Matrix", valor2D, "Doblada", "Jueves 22:00");
let matrix3 = new Pelicula("Matrix", valor2D, "Doblada", "Viernes 20:00");
let matrix4 = new Pelicula("Matrix", valor3D, "Subtitulada", "Viernes 23:00");
let matrix5 = new Pelicula("Matrix", valor4D, "Subtitulada", "Sabado 21:00");

let spiderman1 = new Pelicula("Spiderman", valor2D, "Doblada", "Lunes 19:00");
let spiderman2 = new Pelicula(
  "Spiderman",
  valor2D,
  "Subtitulada",
  "Miércoles 20:00"
);
let spiderman3 = new Pelicula("Spiderman", valor3D, "Doblada", "Jueves 18:00");
let spiderman4 = new Pelicula(
  "Spiderman",
  valor2D,
  "Subtitulada",
  "Viernes 19:00"
);
let spiderman5 = new Pelicula("Spiderman", valor2D, "Doblada", "Sabado 16:00");
let spiderman6 = new Pelicula(
  "Spiderman",
  valor3D,
  "Subtitulada",
  "Sabado 22:00"
);
let spiderman7 = new Pelicula("Spiderman", valor3D, "Doblada", "Domingo 14:00");
let spiderman8 = new Pelicula("Spiderman", valor4D, "Doblada", "Domingo 19:00");

// OBJETO CANDY

class Candy {
  constructor(nombre, precio, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.id = id;
  }
}

let comboIndividual = new Candy("Combo Individual", 600, 0);
let comboNachos = new Candy("Combo Nachos", 750, 1);
let comboPareja = new Candy("Combo Pareja", 1100, 2);
let papas = new Candy("Papas fritas", 300, 3);
let sugus = new Candy("Sugus confitados", 150, 4);

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
