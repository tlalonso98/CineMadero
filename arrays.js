//////////////////// ARRAYS VACÍOS
let peliculas = [];
let candy = [];
let carrito = [];

//////////////////// OBJETO PELÍCULA

class Pelicula {
  constructor(nombre, precio, sala, idioma, funcion, imdbId, poster) {
    this.nombre = nombre;
    this.precio = precio;
    this.sala = sala;
    this.idioma = idioma;
    this.funcion = funcion;
    this.imdbId = imdbId;
    this.poster = poster;
  }
}

//////////////////// ARRAY DE PELÍCULAS CON SU RESPECTIVA FUNCIÓN

peliculas = [
  new Pelicula(
    "Encanto",
    700,
    "2D",
    "Doblada",
    "Lunes 15:00",
    "tt2953050",
    "images/cartelera/encanto.jpg"
  ),
  new Pelicula(
    "Encanto",
    700,
    "2D",
    "Doblada",
    "Miércoles 19:00",
    "tt2953050",
    "images/cartelera/encanto.jpg"
  ),
  new Pelicula(
    "Encanto",
    800,
    "3D",
    "Doblada",
    "Jueves 14:00",
    "tt2953050",
    "images/cartelera/encanto.jpg"
  ),
  new Pelicula(
    "Encanto",
    700,
    "2D",
    "Doblada",
    "Viernes 19:00",
    "tt2953050",
    "images/cartelera/encanto.jpg"
  ),
  new Pelicula(
    "Encanto",
    700,
    "2D",
    "Doblada",
    "Sabado 14:00",
    "tt2953050",
    "images/cartelera/encanto.jpg"
  ),
  new Pelicula(
    "Encanto",
    800,
    "3D",
    "Doblada",
    "Domingo 14:00",
    "tt2953050",
    "images/cartelera/encanto.jpg"
  ),
  new Pelicula(
    "Encanto",
    700,
    "2D",
    "Doblada",
    "Domingo 19:00",
    "tt2953050",
    "images/cartelera/encanto.jpg"
  ),
  new Pelicula(
    "Scream 5",
    700,
    "2D",
    "Subtitulada",
    "Jueves 22:00",
    "tt11245972",
    "images/cartelera/scream.jpg"
  ),
  new Pelicula(
    "Scream 5",
    700,
    "2D",
    "Doblada",
    "Viernes 21:00",
    "tt11245972",
    "images/cartelera/scream.jpg"
  ),
  new Pelicula(
    "Scream 5",
    700,
    "2D",
    "Doblada",
    "Sabado 20:00",
    "tt11245972",
    "images/cartelera/scream.jpg"
  ),
  new Pelicula(
    "Scream 5",
    700,
    "2D",
    "Subtitulada",
    "Sabado 23:00",
    "tt11245972",
    "images/cartelera/scream.jpg"
  ),
  new Pelicula(
    "La casa Gucci",
    700,
    "2D",
    "Subtitulada",
    "Martes 19:00",
    "tt11214590",
    "images/cartelera/gucci.jpg"
  ),
  new Pelicula(
    "La casa Gucci",
    700,
    "2D",
    "Subtitulada",
    "Jueves 21:00",
    "tt11214590",
    "images/cartelera/gucci.jpg"
  ),
  new Pelicula(
    "La casa Gucci",
    700,
    "2D",
    "Subtitulada",
    "Viernes 21:00",
    "tt11214590",
    "images/cartelera/gucci.jpg"
  ),
  new Pelicula(
    "La casa Gucci",
    700,
    "2D",
    "Subtitulada",
    "Sabado 21:00",
    "tt11214590",
    "images/cartelera/gucci.jpg"
  ),
  new Pelicula(
    "La casa Gucci",
    700,
    "2D",
    "Subtitulada",
    "Domingo 18:00",
    "tt11214590",
    "images/cartelera/gucci.jpg"
  ),
  new Pelicula(
    "Sing 2",
    700,
    "2D",
    "Doblada",
    "Martes 19:00",
    "tt6467266",
    "images/cartelera/sing.jpg"
  ),
  new Pelicula(
    "Sing 2",
    700,
    "2D",
    "Doblada",
    "Jueves 19:00",
    "tt6467266",
    "images/cartelera/sing.jpg"
  ),
  new Pelicula(
    "Sing 2",
    700,
    "2D",
    "Doblada",
    "Viernes 17:00",
    "tt6467266",
    "images/cartelera/sing.jpg"
  ),
  new Pelicula(
    "Belle",
    700,
    "2D",
    "Doblada",
    "Lunes 17:00",
    "tt13651628",
    "images/cartelera/belle.jpg"
  ),
  new Pelicula(
    "Belle",
    700,
    "2D",
    "Subtitulada",
    "Miércoles 20:00",
    "tt13651628",
    "images/cartelera/belle.jpg"
  ),
  new Pelicula(
    "Belle",
    700,
    "2D",
    "Doblada",
    "Viernes 20:00",
    "tt13651628",
    "images/cartelera/belle.jpg"
  ),
  new Pelicula(
    "Boda negra",
    700,
    "2D",
    "Subtitulada",
    "Jueves 23:00",
    "tt12057168",
    "images/cartelera/boda.jpg"
  ),
  new Pelicula(
    "Boda negra",
    700,
    "2D",
    "Subtitulada",
    "Viernes 23:00",
    "tt12057168",
    "images/cartelera/boda.jpg"
  ),
  new Pelicula(
    "El Padrino",
    700,
    "2D",
    "Subtitulada",
    "Jueves 14:00",
    "tt0068646",
    "images/cartelera/g1.png"
  ),
  new Pelicula(
    "El Padrino",
    700,
    "2D",
    "Subtitulada",
    "Viernes 22:00",
    "tt0068646",
    "images/cartelera/g1.png"
  ),
  new Pelicula(
    "El Padrino",
    700,
    "2D",
    "Subtitulada",
    "Domingo 21:00",
    "tt0068646",
    "images/cartelera/g1.png"
  ),
  new Pelicula(
    "El Padrino II",
    700,
    "2D",
    "Subtitulada",
    "Jueves 18:00",
    "tt0071562",
    "images/cartelera/g2.png"
  ),
  new Pelicula(
    "El Padrino II",
    700,
    "2D",
    "Subtitulada",
    "Sabado 22:00",
    "tt0071562",
    "images/cartelera/g2.png"
  ),
  new Pelicula(
    "El Padrino II",
    700,
    "2D",
    "Subtitulada",
    "Domingo 20:00",
    "tt0071562",
    "images/cartelera/g2.png"
  ),
  new Pelicula(
    "El Padrino III",
    700,
    "2D",
    "Subtitulada",
    "Jueves 22:00",
    "tt0099674",
    "images/cartelera/g3.png"
  ),
  new Pelicula(
    "El Padrino III",
    700,
    "2D",
    "Subtitulada",
    "Domingo 22:00",
    "tt0099674",
    "images/cartelera/g3.png"
  ),
  new Pelicula(
    "Matrix Resurrecciones",
    700,
    "2D",
    "Subtitulada",
    "Miércoles 20:00",
    "tt10838180",
    "images/cartelera/matrix.jpg"
  ),
  new Pelicula(
    "Matrix Resurrecciones",
    700,
    "2D",
    "Doblada",
    "Jueves 22:00",
    "tt10838180",
    "images/cartelera/matrix.jpg"
  ),
  new Pelicula(
    "Matrix Resurrecciones",
    700,
    "2D",
    "Doblada",
    "Viernes 20:00",
    "tt10838180",
    "images/cartelera/matrix.jpg"
  ),
  new Pelicula(
    "Matrix Resurrecciones",
    800,
    "3D",
    "Subtitulada",
    "Viernes 23:00",
    "tt10838180",
    "images/cartelera/matrix.jpg"
  ),
  new Pelicula(
    "Matrix Resurrecciones",
    1000,
    "4D",
    "Subtitulada",
    "Sabado 21:00",
    "tt10838180",
    "images/cartelera/matrix.jpg"
  ),
  new Pelicula(
    "Spiderman: sin camino a casa",
    700,
    "2D",
    "Doblada",
    "Lunes 19:00",
    "tt10872600",
    "images/cartelera/spiderman.jpg"
  ),
  new Pelicula(
    "Spiderman: sin camino a casa",
    700,
    "2D",
    "Subtitulada",
    "Miércoles 20:00",
    "tt10872600",
    "images/cartelera/spiderman.jpg"
  ),
  new Pelicula(
    "Spiderman: sin camino a casa",
    800,
    "3D",
    "Doblada",
    "Jueves 18:00",
    "tt10872600",
    "images/cartelera/spiderman.jpg"
  ),
  new Pelicula(
    "Spiderman: sin camino a casa",
    700,
    "2D",
    "Subtitulada",
    "Viernes 19:00",
    "tt10872600",
    "images/cartelera/spiderman.jpg"
  ),
  new Pelicula(
    "Spiderman: sin camino a casa",
    1000,
    "4D",
    "Doblada",
    "Sabado 16:00",
    "tt10872600",
    "images/cartelera/spiderman.jpg"
  ),
  new Pelicula(
    "Spiderman: sin camino a casa",
    800,
    "3D",
    "Subtitulada",
    "Sabado 22:00",
    "tt10872600",
    "images/cartelera/spiderman.jpg"
  ),
  new Pelicula(
    "Spiderman: sin camino a casa",
    800,
    "3D",
    "Doblada",
    "Domingo 14:00",
    "tt10872600",
    "images/cartelera/spiderman.jpg"
  ),
  new Pelicula(
    "Spiderman: sin camino a casa",
    700,
    "2D",
    "Doblada",
    "Domingo 19:00",
    "tt10872600",
    "images/cartelera/spiderman.jpg"
  ),
];

//////////////////// ARRAY PARA PELÍCULAS ÚNICAS (Sin distinción por funciones o precios)

let setObj = new Set();
let peliUnica = peliculas.reduce((acc, peli) => {
  if (!setObj.has(peli.nombre)) {
    setObj.add(peli.nombre, peli);
    acc.push(peli);
  }
  return acc;
}, []);
