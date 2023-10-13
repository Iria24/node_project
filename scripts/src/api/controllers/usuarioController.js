const Usuario = require("../models/usuarioModel");
const {
  validarUsuarioDB,
  validarContraseña,
} = require("../../utils/validador");
const bcrypt = require("bcrypt");
const { generarToken } = require("../../utils/jsonWebToken");

const registro = async (req, res) => {
  try {
    const usuarioBody = new Usuario(req.body);
    const validarUsuario = await validarUsuarioDB(req.body.usuario);
    if (!validarUsuario) {
      if (validarContraseña(req.body.contraseña)) {
        usuarioBody.contraseña = bcrypt.hashSync(usuarioBody.contraseña, 10);
        const crearUsuario = await usuarioBody.save();
        return res.json({
          success: true,
          message: "Agregado con exito",
          data: crearUsuario,
        });
      } else {
        return res.json({
          success: true,
          message: "La contraseña no cumple con los requisitos",
        });
      }
    }
    return res.json({ success: false, message: "El usuario ya existe" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const login = async (req, res) => {
  try {
    const informacionUsuario = req.body;
    const usuarioBD = await validarUsuarioDB(informacionUsuario.usuario);
    if (!usuarioBD) {
      return res.json({
        success: false,
        message: "El usuario no existe",
      });
    }
    if (
      !bcrypt.compareSync(informacionUsuario.contraseña, usuarioBD.contraseña)
    ) {
      return res.json({
        success: false,
        message: "La contraseña es incorrecta",
      });
    }
    const token = generarToken(usuarioBD._id, usuarioBD.usuario);
    return res.json({
      success: true,
      message: "Inicio de sesión realizado",
      token: token,
      informacionUsuario: usuarioBD,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const perfil = async (req, res) => {
  try {
    return res.status(200).json(req.perfilUsuario);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { registro, login, perfil };
