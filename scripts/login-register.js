const login = document.querySelector(".contenedor");
const registrate = document.querySelector(".contenedor2");

const loginUsuario = document.querySelector(".contenedor-form-article1-input");
const loginValue = document.querySelector(".contenedor-form-article2-input");
const botonLogin = document.querySelector(".contenedor-boton");

const registroUsuario = document.querySelector(
  ".contenedor2-form-article1-input"
);
const registroValue = document.querySelector(
  ".contenedor2-form-article2-input"
);
const botonRegistro = document.querySelector(".contenedor2-boton");

const linkRegistrate = document.querySelector(".contenedor-parraf-link");
const linkLogin = document.querySelector(".contenedor2-parraf-link");

botonLogin.addEventListener("click", function () {
  const loginDatosUsuario = loginUsuario.value;
  const loginDatosContraseña = loginValue.value;
  console.log(loginDatosUsuario, loginDatosContraseña);
});

botonRegistro.addEventListener("click", function () {
  const registroDatosUsuario = registroUsuario.value;
  const registroDatosContraseña = registroValue.value;
  console.log(registroDatosUsuario, registroDatosContraseña);
});

linkRegistrate.addEventListener("click", function (event) {
  event.preventDefault();

  registrate.classList.toggle("activado");
  login.classList.toggle("desactivado");
});

linkLogin.addEventListener("click", function (event) {
  event.preventDefault();

  login.classList.remove("desactivado");
  registrate.classList.remove("activado");
});
