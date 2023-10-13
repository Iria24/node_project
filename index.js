const express = require('express');
const {connectDb} = require("./src/utils/database");
const routerCerveza = require("./src/api/routes/cervezas.routes")

const app = express();
//estas configuraciones nos sirven para recibir objetos de tipo json.
app.use(express.json());

connectDb();

app.use("/cerveza", routerCerveza)

const PORT = 8080;
app.listen(PORT, () => {

    console.log('escuchando por el puerto ' + PORT);

});


