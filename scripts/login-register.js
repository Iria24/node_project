const login = document.querySelector(".contenedor");
const registrate = document.querySelector(".contenedor2");

const linkRegistrate = document.querySelector(".contenedor-parraf-link");
const linkLogin = document.querySelector(".contenedor2-parraf-link");

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
