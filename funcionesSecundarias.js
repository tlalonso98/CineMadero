/////////////////////// LO DE ACÁ ABAJO ES VIEJO. LO DEJO COMENTADO POR SI LO REUTILIZO DESPUÉS

// MENSAJE DE BIENVENIDA
/*function bienvenida(username, maderoPlus) {
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
