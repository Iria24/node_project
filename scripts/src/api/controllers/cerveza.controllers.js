const Cerveza = require("../models/cerveza.model");

const postCerveza = async (req, res) => {
  try {
    const body = req.body;
    const cerveza = new Cerveza(body);
    const createdCerveza = await cerveza.save();
    return res.json(createdCerveza);
  } catch (error) {
    return res.json(error);
  }
};

const getCerveza = async (req, res) => {
  try {
    const cervezas = await Cerveza.find();
    return res.status(200).json(cervezas);
  } catch (error) {
    return res.json(error);
  }
};

const updateCerveza = async (req, res) => {
  try {
    const { id } = req.params;
    const cervezaBody = new Cerveza(req.body);
    cervezaBody._id = id;
    const updateCerveza = await Cerveza.findByIdAndUpdate(id, cervezaBody, {
      new: true,
    });
    if (!updateCerveza) {
      return res.status(404).json({ message: "cerveza no existe" });
    }
    return res.status(200).json(updateCerveza);
  } catch (error) {}
};
const deleteCerveza = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCerveza = await Cerveza.findByIdAndDelete(id);
    if (!deleteCerveza) {
      return res.status(404).json({ message: "La cerveza no existe" });
    }
    return res.status(200).json(deleteCerveza);
  } catch (error) {}
};
const getCervezabyName = async (req, res) => {
  try {
    const { nameCerveza } = req.params;
    const cerveza = await Cerveza.find({ nombre: nameCerveza });
    return res.status(200).json(cerveza);
  } catch (error) {
    return res.json(error);
  }
};

module.exports = {
  postCerveza,
  getCerveza,
  updateCerveza,
  deleteCerveza,
  getCervezabyName,
};
