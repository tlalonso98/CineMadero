////////////////////// VARIABLES Y ARRAYS GLOBALES
let subtotal = 0;
let peliculaSeleccionada = "";
let funcionesDisponibles = [];
let funcionSeleccionada = "";
let comestibles = [];
let usuarioPremium = true;

////////////////////// RECUPERAR VALORES DE LA DATABASE Y ENVIAR A UN ARRAY
fetch("/data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((candy) => {
      comestibles.push(candy);
    });
  });

////////////////////// MANTENER CARRITO EN LOCAL STORAGE
function guardarCarrito() {
  localStorage.setItem("carritoGuardado", JSON.stringify(carrito));
}

////////////////////// CARGAR OPCIONES PARA EL SELECT DE PELÍCULAS
function cargarPeliculas() {
  for (let i = 0; i < peliUnica.length; i++) {
    document.getElementById("formPeliculas").innerHTML =
      document.getElementById("formPeliculas").innerHTML +
      `<option class="opcionesPelicula" value="${i}">${peliUnica[i].nombre}</option>`;
  }
}

////////////////////// CARGAR OPCIONES PARA EL SELECT DE FUNCIONES
function cargarFunciones() {
  for (let i = 0; i < funcionesDisponibles.length; i++) {
    document.getElementById("formFunciones").innerHTML =
      document.getElementById("formFunciones").innerHTML +
      `<option class="opcionesFuncion" value="${i}">${funcionesDisponibles[i].funcion} (${funcionesDisponibles[i].idioma} - ${funcionesDisponibles[i].sala})</option>`;
  }
}

////////////////////// RECUPERAR PELÍCULA SELECCIONADA POR EL USUARIO (EVENTO ONCHANGE)
function recuperarPelicula() {
  // Reinicio de valores
  funcionesDisponibles = [];
  document.getElementById("formFunciones").innerHTML = "";
  // Recuperamos la película elegida por el usuario
  let selectPeli = document.getElementById("formPeliculas");
  peliculaSeleccionada =
    document.getElementsByClassName("opcionesPelicula")[selectPeli.value]
      .innerHTML;
  // Filtramos las funciones de esa película en un array
  for (let i = 0; i < peliculas.length; i++) {
    funcionesDisponibles = peliculas.filter(
      (pelicula) => pelicula.nombre == peliculaSeleccionada
    );
  }
  // Las funciones de la película elegida se cargan en un form select
  cargarFunciones();
}

////////////////////// RECUPERAR FUNCIÓN SELECCIONADA Y AGREGARLA AL CARRITO (EVENTO ONCLICK)
function recuperarFuncion() {
  // Recuperamos la función elegida por el usuario y su valor
  selectFuncion =
    document.getElementsByClassName("opcionesFuncion")[
      document.getElementById("formFunciones").value
    ];
  selectFuncion2 = selectFuncion.getAttribute("value");
  // Declaramos el objeto específico de la película-función
  let funcionSeleccionada = funcionesDisponibles[selectFuncion2];
  // Reiniciamos el primer valor del carrito en caso de que sea una película
  if (!carrito[0]?.id) {
    carrito.shift();
  }
  // Cargamos la película en el primer lugar del carrito
  carrito = [funcionSeleccionada, ...carrito];
  sumarCarrito();
  guardarCarrito();
  mostrarCarrito();
  mostrarCandy();
  // Mensaje de confirmación y habilitar tienda de comestibles
  Toastify({
    text:
      "Seleccionaste la función de '" +
      funcionSeleccionada.nombre +
      "' para el " +
      funcionSeleccionada.funcion,
    style: { background: "green" },
    duration: 4000,
    offset: { x: 10, y: 60 },
  }).showToast();
}

//////////////////// AGREGAR COMESTIBLES AL CARRITO (EVENTO ONLICK)
function agregarCandy(candySeleccionado) {
  carrito.push(comestibles[candySeleccionado]);
  sumarCarrito();
  guardarCarrito();
  mostrarCarrito();
}

//////////////////// SUMAR CARRITO (SE ACTIVA CUANDO AGREGAMOS ALGO)
function sumarCarrito() {
  subtotal = 0;
  for (let i = 0; i < carrito.length; i++) {
    subtotal = subtotal + carrito[i].precio;
  }
  return subtotal;
}

//////////////////// ELIMINAR PRODUCTOS DEL CARRITO (EVENTO ONCLICK)
function eliminarProducto(posicionProducto) {
  if (posicionProducto == 0) {
    Toastify({
      text: "Para continuar con la compra, debe haber una película seleccionada.",
      style: { background: "darkred" },
      duration: 4000,
      offset: { x: 10, y: 60 },
    }).showToast();
  } else {
    subtotal = subtotal - carrito[posicionProducto].precio;
    carrito.splice(posicionProducto, 1);
    guardarCarrito();
    mostrarCarrito();
  }
}

//////////////////// VACIAR LOS PRODUCTOS DEL CARRITO EXCEPTO LA PELÍCULA (EVENTO ONCLICK)
function vaciarCarrito() {
  carrito.splice(1);
  sumarCarrito();
  guardarCarrito();
  mostrarCarrito();
}

//////////////////// REVISAR SI HAY COSAS EN EL CARRITO Y MOSTRARLAS AL USUARIO
function comprobarStorage() {
  if (localStorage.getItem("carritoGuardado")) {
    let carritoRecuperado = JSON.parse(localStorage.getItem("carritoGuardado"));
    for (let i = 0; i < carritoRecuperado.length; i++) {
      carrito.push(carritoRecuperado[i]);
    }
    sumarCarrito();
    guardarCarrito();
    mostrarCarrito();
  }
}

//////////////////// PROCESAR COMPRA
function procesarCompra() {
  let total = 0;
  if (usuarioPremium == true) {
    total = subtotal - subtotal * 0.2;
    Toastify({
      text:
        "¡Felicidades! Tu descuento por ser +Madero fue aplicado. El total de tu compra fue de $" +
        total,
      style: { background: "green" },
      duration: 4000,
      offset: { x: 10, y: 60 },
    }).showToast();
  } else {
    total = subtotal;
    Toastify({
      text: "¡Felicidades! El total de tu compra fue de $" + total,
      style: { background: "green" },
      duration: 4000,
      offset: { x: 10, y: 60 },
    }).showToast();
  }
  return total;
}

//   console.log(
//     "Total Madero+: $" + aplicarDescuento(subtotal, true, codigoDescuento)
//   );
// }

//////////////////// EJECUCIÓN DE FUNCIONES
comprobarStorage(); // Comprobamos si el usuario ingresó previamente
cargarPeliculas(); // Se carga automáticamente la cartelera
recuperarPelicula(); // Se carga por primera vez y luego se reitera mediante evento
guardarCarrito(); // Guardamos lo hecho por el usuario en Local Storage
