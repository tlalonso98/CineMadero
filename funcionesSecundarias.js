// MOSTRAR TIENDA DE COMESTIBLES EN EL DOM (Se activa con evento o si teníamos artículos en carrito)

function mostrarCandy() {
  document.getElementById("candy").innerHTML = `      
    <h2 class="titulo text-light text-uppercase">Agregue sus comestibles</h2>
    <div class="row align-items-center tarjetas">
      <div class="col-xxl-3 col-lg-4 col-sm-6">
        <img onclick="agregarCandy0()" src="images/candy/combo.png" alt="Combo individual id="0" />
        <h2 class="h6">Combo individual</h2>
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6">
        <img onclick="agregarCandy1()" src="images/candy/nachos.png" alt="Combo nachos" id="1" />
        <h2 class="h6">Combo nachos</h2>
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6">
        <img onclick="agregarCandy2()" src="images/candy/pareja.png" alt="Combo pareja" id="2" />
        <h2 class="h6">Combo pareja</h2>
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6">
        <img onclick="agregarCandy3()" src="images/candy/papas.png" alt="Papas fritas" id="3"/>
        <h2 class="h6">Papas fritas</h2>
      </div>
      <div class="col-xxl-3 col-lg-4 col-sm-6">
        <img onclick="agregarCandy4()" src="images/candy/sugus.png" alt="Sugus confitados" id="4" />
        <h2 class="h6">Sugus confitados</h2>
      </div>
    </div>
    <button
    onclick="sumarCarrito()"
    type="button"
    class="btn btn-dark border-light px-5 my-4 shadow"
  >
    Finalizar compra
  </button>`;
}

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
