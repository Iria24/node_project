const express = require("express");
const { registro, login, perfil } = require("../controllers/usuarioController");
const { autorizado } = require("../../middleware/autorizacion");

const ruta = express.Router();

ruta.post("/registro", registro);
ruta.post("/login", login);
ruta.post("/perfil", [autorizado], perfil);

module.exports = ruta;
