//estas configuraciones nos sirven para recibir objetos de tipo json.
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost/tu_base_de_datos', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

// Configurar las rutas para las cervezas
const cervezasRouter = require('./routes/cervezas');
app.use('/cervezas', cervezasRouter);

app.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});