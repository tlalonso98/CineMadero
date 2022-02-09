////////////////////// VARIABLES GLOBALES
let subtotal = 0;

////////////////////// SELECCIONAR PELÍCULA (Evento HTML)
let peliculaSeleccionada = [];
let seleccionarPelicula = "";
let funcionElegida = "";

function elegirPelicula() {
  let hacerBreak = false;
  let seleccionarPelicula = document.getElementById(
    "seleccionarPelicula"
  ).value;

  for (let i = 0; i < peliculas.length; i++) {
    if (seleccionarPelicula == peliculas[i].nombre) {
      peliculaSeleccionada = peliculas.filter(
        (pelicula) => pelicula.nombre == seleccionarPelicula
      );
      for (const pelicula of peliculaSeleccionada) {
        document.getElementById("seleccionarFuncion").innerHTML =
          document.getElementById("seleccionarFuncion").innerHTML +
          `<option>${pelicula.funcion}</option>`;
      }
      hacerBreak = true;
      break;
    }
  }
  if (hacerBreak == false) {
    alert("La película seleccionada no se encuentra disponible.");
  }
}

////////////////////// SELECCIONAR FUNCIÓN + MOSTRAR COMESTIBLES (Ejecutable con evento en HTML)
function elegirFuncion() {
  let seleccionarFuncion = document.getElementById("seleccionarFuncion").value;
  funcionElegida = peliculaSeleccionada.find(
    (pelicula) => pelicula.funcion == seleccionarFuncion
  );
  if (funcionElegida == undefined) {
    alert("La función no se encuentra disponible.");
  } else {
    carrito.push(funcionElegida);
    alert(
      "Seleccionaste la función de " +
        funcionElegida.nombre +
        " para el " +
        funcionElegida.funcion +
        ". ¡Acompáñalo con los productos de nuestra tienda!"
    );
    //Código HTML de la tienda Candy
    document.getElementById("candy").innerHTML = `      
    <h2 class="titulo text-light text-uppercase">Comestibles</h2>
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
}

////////////////////// AGREGAR COMESTIBLES AL CARRITO. Supongo que hay manera de hacer de manera más automáticas (la misma función para cada producto sin repetir) pero no se me ocurrió cómo.
function agregarCandy0() {
  carrito.push(candy[0]);
}
function agregarCandy1() {
  carrito.push(candy[1]);
}
function agregarCandy2() {
  carrito.push(candy[2]);
}
function agregarCandy3() {
  carrito.push(candy[3]);
}
function agregarCandy4() {
  carrito.push(candy[4]);
}

////////////////////// MOSTRAR PRODUCTOS DEL CARRITO EN EL DOCUMENTO
function mostrarCarrito() {
  for (const producto of carrito) {
    document.getElementById("carrito").innerHTML =
      document.getElementById("carrito").innerHTML +
      `<h6>${producto.nombre}</h6>
    <p>  Precio: $${producto.precio}</p>`;
  }

  document.getElementById("carrito").innerHTML =
    document.getElementById("carrito").innerHTML +
    `<h4>Subtotal: $${subtotal}</h4>`;
}

////////////////////// SUMAR CARRITO
function sumarCarrito() {
  for (let i = 0; i < carrito.length; i++) {
    subtotal = subtotal + carrito[i].precio;
  }
  mostrarCarrito();
  return subtotal;
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
