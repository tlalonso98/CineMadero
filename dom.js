////////////////////// SOLICITAR INFO A LA API Y CARGAR PELÍCULAS EN CARTELERA
async function cargarCartelera() {
  for (let i = 0; i < peliUnica.length; i++) {
    const resp = await fetch(
      "https://www.omdbapi.com/?i=" + peliUnica[i].imdbId + "&apikey=5eea0be4"
    );
    const OMDB = await resp.json();
    document.getElementById("cartelera").innerHTML =
      document.getElementById("cartelera").innerHTML +
      `<div class="col-xxl-3 col-lg-4 col-sm-6">
        <img src="${peliUnica[i].poster}" alt="${peliUnica[i].nombre}"/>
        <h2 class="h6">${peliUnica[i].nombre}</h2>
        <p class="bg-dark text-light">Duración: ${OMDB.Runtime}.<p>
        <p class="bg-warning opacity-75">IMDB: ${OMDB.imdbRating} / 10 ★<p>
        </div>`;
  }
}

////////////////////// MOSTRAR COMESTIBLES (EVENTO ONCLICK O SI HABÍA CARRITO EN LOCAL STORAGE)
function mostrarCandy() {
  document.getElementById("candy").innerHTML = `
      <h2 class="titulo text-light text-uppercase">Agregue sus comestibles</h2>
      <div class="row align-items-center tarjetas" id="comestibles"></div>`;
  for (let i = 0; i < comestibles.length; i++) {
    document.getElementById("comestibles").innerHTML =
      document.getElementById("comestibles").innerHTML +
      `<div class="col-xxl-3 col-lg-4 col-sm-6">
          <img style="cursor:pointer;" id="${comestibles[i].id}" onclick="agregarCandy(${comestibles[i].id})" src="${comestibles[i].imagen}" alt="${comestibles[i].nombre}"/>
          <h2 class="h6">${comestibles[i].nombre}</h2>
        </div>`;
  }
}

//////////////////// MOSTRAR CARRITO EN EL DOCUMENTO (SE ACTIVA CUANDO AGREGAMOS ALGO)
function mostrarCarrito() {
  // Mostrar película en el carrito
  document.getElementById(
    "carrito"
  ).innerHTML = `<div class="row p-3 border border-dark m-0 align-items-center">
  <div class= "col-9">
    <h4>${carrito[0].nombre} | ${carrito[0].sala} - ${carrito[0].funcion}</h5>
    <h6>Precio: $${carrito[0].precio} | ${entradasSeleccionadas} entradas</h6>
    <h6>Precio: $${carrito[0].precio * entradasSeleccionadas}</h6>
  </div>
  <div class= "col-3">
  <button onclick="eliminarProducto(0)" "type="button" class="w-50 btn btn-danger border-dark shadow" value="Eliminar">Eliminar</button>
  </div>
</div>`;
  // Mostrar demás productos
  for (let i = 1; i < carrito.length; i++) {
    document.getElementById("carrito").innerHTML =
      document.getElementById("carrito").innerHTML +
      `<div class= "row p-3 border border-dark m-0 align-items-center">
        <div class= "col-9">
          <h5>${carrito[i].nombre}</h5>
          <h6>Precio: $${carrito[i].precio}</h6>
        </div>
        <div class= "col-3">
        <button onclick="eliminarProducto(${i})" "type="button" class="w-50 btn btn-danger border-dark shadow" value="Eliminar">Eliminar</button>
        </div>
      </div>`;
  }
  // Mostrar subtotal
  document.getElementById("carrito").innerHTML =
    document.getElementById("carrito").innerHTML +
    `<div class= "row p-3 border bg-dark border-dark m-0 align-items-center">
      <div class= "col-9">
        <h4 class="p-3 text-light">Total: $${subtotal}</h4>
        <h4 class="p-3 text-light">¡Si sos usuario <span class="text-warning">+Madero</span> ahorrás $${
          subtotal * 0.15
        }!</h4>        
      </div>
      <div class= "col-3">
        <button onclick="vaciarCarrito()" "type="button" class="my-2 w-50 btn btn-danger border-light shadow" value="Vaciar">Vaciar</button>
        <button onclick="procesarCompra()" type="button" class="my-2 w-50 btn btn-success border-light shadow" value="Comprar">Comprar</button>
      </div>
    </div>
    `;
}

////////////////////// EJECUTAR FUNCIÓN
cargarCartelera();
