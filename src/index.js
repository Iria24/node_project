const express = require('express');


const app = express();
//estas configuraciones nos sirven para recibir objetos de tipo json.
app.use(express.json());



const PORT = 3000;
app.listen(PORT, () => {

    console.log('escuchando por el puerto ' + PORT);

});

