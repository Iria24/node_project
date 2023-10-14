const mongoose = require("mongoose");

const Esquema = mongoose.Schema;

const usuarioEsquema = new Esquema(
  {
    usuario: { type: String, required: true, unique: true },
    contraseña: { type: String, required: true },
    role: {
      type: String,
      default: "usuario",
      enum: ["usuario", "administrador"],
    },
  },
  {
    collection: "usuario",
  }
);

const Usuario = mongoose.model("usuario", usuarioEsquema);

module.exports = Usuario;
