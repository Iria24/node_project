const express = require("express");
const { connectDb } = require("./src/utils/database");
const routerCerveza = require("./src/api/routes/cervezas.routes");
const rutasUsuarios = require("./src/api/routes/usuarioRoutes");

const app = express();

app.use(express.json());
app.use(express.static("../"));

connectDb();

app.use("/cerveza", routerCerveza);
app.use("/registro", rutasUsuarios);
app.use("/login", rutasUsuarios);
app.use("/perfil", rutasUsuarios);
app.use("/", rutasUsuarios);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando por el puerto: http://localhost:${PORT}/`);
});
