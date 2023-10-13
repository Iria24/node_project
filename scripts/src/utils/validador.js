const Usuario = require("../api/models/usuarioModel");

const validarContraseña = (pass) => {
  const regex = /[A-Za-z\d$@$!%*?&]{8,15}/;
  return regex.test(pass);
};

const validarUsuarioDB = async (usuario) => {
  try {
    const validarUsuario = await Usuario.findOne({ usuario: usuario });
    return validarUsuario;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { validarContraseña, validarUsuarioDB };
