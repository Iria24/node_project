const mongoose = require('mongoose');

const cervezaSchema = new mongoose.Schema({
  tipo: { type: String, required: true }, // Rubia, Tostada, Negra
  procedencia: { type: String, required: true },
  gradosAlcohol: { type: Number, required: true },
  ingredientes: [{ type: String }],
});

const Cerveza = mongoose.model('Cerveza', cervezaSchema);

module.exports = Cerveza;