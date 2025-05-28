/* Se cambia la declaracion de variable de var a const */
const formulario = document.querySelector("form")

formulario.onsubmit = function (e) {
  /* Se añade Default en el elemento */
  e.preventDefault();
  /* Se cambia la declaracion de variables de var */
  /* Se renombran las variables para mejor lectura */
  let nombre = formulario.elements[0]
  let edad = formulario.elements[1]
  const nacionalidadSeleccionada = formulario.elements[2]

  //se cambia la declaracion de variables de var y se cambia el nombre
  const nombreValor = nombre.value;
  const edadValor = parseInt(edad.value); // Se asegura conversión a número

  /* Hay una union de variables se separan 
  const i = nacionalidad.selectedIndexnacionalidad = nacionalidad.options[i].value
  queda asi:
    const i = nacionalidad.selectedIndex
    nacionalidad = nacionalidad.options[i].value
  */
  const i = nacionalidadSeleccionada.selectedIndex
  const nacionalidadValor = nacionalidadSeleccionada.options[i].value

  console.log(nombreValor, edadValor);
  console.log(nacionalidadValor);

  /* Se asignan las varibles ya declaradas anteriormente en su respectivo if */
  if (nombreValor.length === 0) {
    nombre.classList.add("error") // Se corrige: se usa el input
  }
  if (edadValor < 18 || edadValor > 120 || isNaN(edadValor)) {
    edad.classList.add("error") // Se corrige: se usa el input
  }

  if (nombreValor.length > 0
    && (edadValor >= 18
      && edadValor <= 120)) {
    agregarInvitado(nombreValor, edadValor, nacionalidadValor)
  }
}

//Se cambia la declaracion de variables var a const
const botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
const corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  //Se cambia la declaracion de variables var a const
  const lista = document.getElementById("lista-de-invitados")

  const elementoLista = document.createElement("div")
  //Esta mal definido el evento added, se cambia a .add
  elementoLista.classList.add("elemento-lista")
  lista.appendChild(elementoLista)

  const spanNombre = document.createElement("span")
  const inputNombre = document.createElement("input")
  const espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)

  function crearElemento(descripcion, valor) {
    const spanNombre = document.createElement("span")
    const inputNombre = document.createElement("input")
    const espacio = document.createElement("br")
    spanNombre.textContent = descripcion + ": "
    inputNombre.value = valor
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)

  // Se cambia la declaracion de variable
  const botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  // Se cambia la declaracion de variable
  const corteLinea = document.createElement("br")
  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

  /* Quito las // de la linea 101 para comprobar funcionamiento */
  botonBorrar.onclick = function () {
    this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove()
  }
}
