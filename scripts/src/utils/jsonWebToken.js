const jsonWebToken = require("jsonwebtoken");

const verificarToken = (token) => {
  return jsonWebToken.verify(token, "loquesea");
};

const generarToken = (id, email) => {
  return jsonWebToken.sign({ id, email }, "loquesea", { expiresIn: "1h" });
};

module.exports = { generarToken, verificarToken };
