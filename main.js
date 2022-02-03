///// DECLARACIÓN DE FUNCIONES /////

// SELECCIONAR LA PELÍCULA
let peliculaSeleccionada = [];
let seleccionarPelicula = "";
let funcionElegida = "";

function elegirPelicula() {
  let hacerBreak = false;
  let seleccionarPelicula = prompt("¿Qué película desea ver?");

  for (let i = 0; i < peliculas.length; i++) {
    if (seleccionarPelicula == peliculas[i].nombre) {
      peliculaSeleccionada = peliculas.filter(
        (pelicula) => pelicula.nombre == seleccionarPelicula
      );
      alert(
        "Estas son las funciones disponibles: " +
          JSON.stringify(peliculaSeleccionada)
      );
      hacerBreak = true;
      break;
    }
  }
  if (hacerBreak == false) {
    alert("La película seleccionada no se encuentra disponible.");
  }
}

// SELECCIONAR LA FUNCIÓN
function elegirFuncion() {
  let seleccionarFuncion = prompt("Seleccione la función.");
  funcionElegida = peliculaSeleccionada.find(
    (pelicula) => pelicula.funcion == seleccionarFuncion
  );
  if (funcionElegida == undefined) {
    alert("La función no se encuentra disponible.");
  } else {
    alert(
      "Seleccionaste la función de " +
        funcionElegida.nombre +
        " para el " +
        funcionElegida.funcion +
        ". ¡Acompáñalo con los productos de nuestra tienda!"
    );
    carrito.push(funcionElegida);
  }
}

// AGREGAR PRODUCTOS AL CARRITO
function agregarCandy() {
  let candyElegido = "";
  let hacerBreak = false;
  while (candyElegido != "Listo") {
    candyElegido = prompt(
      "¿Qué vas a llevar? Tenemos " + JSON.stringify(candy)
    );
    hacerBreak = false;
    for (let i = 0; i < candy.length; i++) {
      if (candyElegido == candy[i].nombre) {
        carrito.push(candy[i]);
        hacerBreak = true;
        break;
      }
    }
    if (hacerBreak == false && candyElegido != "Listo") {
      alert("Lo sentimos, no contamos con ese producto");
    }
  }
}

///// EJECUCIÓN DE FUNCIONES /////

elegirPelicula();
elegirFuncion();
agregarCandy();
console.log(carrito);

/* LO DE ABAJO ES LO QUE YA ENVIÉ OTRA VEZ. LO DEJÉ COMENTADO PARA NO RECIBIR TANTOS PROMPTS Y ALERTS

// MENSAJE DE BIENVENIDA

function bienvenida(username, maderoPlus) {
  let mensajeBienvenida = "";
  if (maderoPlus == true) {
    mensajeBienvenida =
      "Bienvenido de nuevo @" +
      username +
      ". ¡Continúa accediendo a los mejores beneficios!";
  } else {
    mensajeBienvenida =
      "Bienvenido @" + username + ". ¡Mirá los estrenos de esta semana!";
  }
  return mensajeBienvenida;
}

username = prompt("Ingresa tu nombre de usuario");

console.log(bienvenida(username, true));
console.log(bienvenida(username, false));

// EJEMPLO SUMA EN CARRITO

function sumarProductos(
  valorTicket,
  cantidadTicket,
  comboPareja,
  cantidadCandy
) {
  subtotal = valorTicket * cantidadTicket + comboPareja * cantidadCandy;
  return subtotal;
}

let ticket2d = 700;
let ticket3d = 800;
let ticket4d = 950;
let comboPareja = 1100;
let comboNachos = 750;

console.log("Subtotal: $" + sumarProductos(ticket4d, 2, comboPareja, 1));

// CÓDIGO DE DESCUENTO

let codigoDescuento = " ";
while (codigoDescuento == " ") {
  codigoDescuento = prompt(
    "Ingrese su código de descuento. Si no tiene uno, deje esta celda vacía."
  );
}
if (codigoDescuento != "") {
  codigoDescuento = true;
} else {
  codigoDescuento = false;
}

// DESCUENTO MADERO +

function aplicarDescuento(subtotal, maderoPlus, codigoDescuento) {
  if (maderoPlus == true) {
    total = subtotal - 0.2 * subtotal;
  } else if (codigoDescuento == true) {
    total = subtotal - 0.1 * subtotal;
  } else {
    total = subtotal;
  }
  return total;
}

console.log(
  "Total Madero+: $" + aplicarDescuento(subtotal, true, codigoDescuento)
);

console.log(
  "Total con código de descuento: $" +
    aplicarDescuento(subtotal, false, codigoDescuento)
);*/
