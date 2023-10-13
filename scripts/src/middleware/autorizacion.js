const { verificarToken } = require("../utils/jsonWebToken");
const Usuario = require("../api/models/usuarioModel");

const autorizado = async (req, res, siguiente) => {
  try {
    const autorizacion = req.headers.authorization;
    if (!autorizacion) {
      return res.status(400).json({ message: "No autorizado" });
    }
    const token = autorizacion.split(" ")[1];
    const tokenVerificado = verificarToken(token);
    console.log(tokenVerificado);
    if (!tokenVerificado.id) {
      return res
        .status(400)
        .json({ message: "No autorizado", message: tokenVerificado });
    }
    const perfilUsuario = await Usuario.findById(tokenVerificado.id);
    req.perfilUsuario = perfilUsuario;
    siguiente();
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { autorizado };
