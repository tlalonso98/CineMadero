////////////////////// VARIABLES GLOBALES
let subtotal = 0;

let peliculaSeleccionada = [];
let seleccionarPelicula = "";
let funcionElegida = "";

// MANTENER CARRITO EN LOCAL STORAGE
function guardarCarrito() {
  localStorage.setItem("carritoGuardado", JSON.stringify(carrito));
}

//////////////////// SELECCIONAR PELÍCULA (Evento HTML)
function elegirPelicula() {
  //peliculaSeleccionada.splice(0, 5); //no funciona de ninguna de las dos maneras
  //peliculaSeleccionada = []; //no se como vaciar este array o evitar que filter cree uno nuevo
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
  return peliculaSeleccionada;
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
    mostrarCandy();
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
  document.getElementById("carrito").innerHTML = "";
  for (const producto of carrito) {
    document.getElementById("carrito").innerHTML =
      document.getElementById("carrito").innerHTML +
      `<h6>${producto.nombre}</h6>
    <p>  Precio: $${producto.precio}</p>`;
  }

  document.getElementById("carrito").innerHTML =
    document.getElementById("carrito").innerHTML +
    `<h4>Subtotal: $${subtotal}</h4>`;

  document.getElementById("vaciarCarrito").innerHTML = `<button
    onclick="vaciarCarrito()"
    type="button"
    class="btn btn-danger border-light px-5 mb-3 shadow"
    value="Vaciar"
  >
    Vaciar carrito
  </button>`;
}

////////////////////// SUMAR CARRITO (Evento HTML)
function sumarCarrito() {
  subtotal = 0;
  for (let i = 0; i < carrito.length; i++) {
    subtotal = subtotal + carrito[i].precio;
  }
  mostrarCarrito();
  guardarCarrito();
  return subtotal;
}

////////////////////// REVISAR SI HAY COSAS EN EL CARRITO Y MOSTRARLAS AL USUARIO
if (localStorage.getItem("carritoGuardado")) {
  let carritoRecuperado = JSON.parse(localStorage.getItem("carritoGuardado"));

  for (let i = 0; i < carritoRecuperado.length; i++) {
    carrito.push(carritoRecuperado[i]);
  }
  mostrarCandy();
  sumarCarrito();
}

////////////////////// VACIAR CARRITO
function vaciarCarrito() {
  carrito = [];
  console.log(carrito);
  guardarCarrito();
  sumarCarrito();
  document.getElementById("carrito").innerHTML = "";
  document.getElementById("vaciarCarrito").innerHTML = "";
}
