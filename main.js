// MENSAJE DE BIENVENIDA

function bienvenida(username, maderoPlus) {
  let mensajeBienvenida = "";
  if (maderoPlus == true) {
    mensajeBienvenida =
      "¡Bienvenido de nuevo @" +
      username +
      "! ¿Ya pediste tu combo gratis este mes?";
  } else {
    mensajeBienvenida =
      "Bienvenido @" + username + ". ¡Mirá los estrenos de esta semana!";
  }
  return mensajeBienvenida;
}

username = prompt("Ingresa tu nombre de usuario");

console.log(bienvenida(username, true));
console.log(bienvenida(username, false));

// EJEMPLO SUMA EN CARRITO (Se que esta función está mal pero supongo que recién más avanzados en el curso voy a poder desarrollar correctamente el carrito).

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
let ticket4d = 1000;
let comboPareja = 800;
let comboNachos = 500;

console.log("Subtotal: $" + sumarProductos(ticket4d, 2, comboPareja, 1));

// CÓDIGO DE DESCUENTO

let codigoDescuento = prompt(
  "Si posee un código de descuento, ingréselo aquí. Caso contrario, deje esta celda vacía."
);
while (codigoDescuento == " ") {
  codigoDescuento = prompt(
    "Si posee un código de descuento, ingréselo aquí. Caso contrario, deje esta celda vacía."
  );
}
if (codigoDescuento != "") {
  codigoDescuento == true;
} else {
  codigoDescuento == false;
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

console.log("Total: $" + aplicarDescuento(subtotal, true, codigoDescuento));
console.log("Total: $" + aplicarDescuento(subtotal, false, codigoDescuento));
