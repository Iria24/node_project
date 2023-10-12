const express = require('express');
const router = express.Router();
const Cerveza = require('../models/cerveza');

// Ruta para obtener todas las cervezas
router.get('/', async (req, res) => {
  try {
    const cervezas = await Cerveza.find();
    res.json(cervezas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Ruta para crear una cerveza
router.post('/', async (req, res) => {
  const cerveza = new Cerveza(req.body);
  try {
    const nuevaCerveza = await cerveza.save();
    res.status(201).json(nuevaCerveza);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Agregar más rutas para actualizar y eliminar cervezas según sea necesario

module.exports = router;