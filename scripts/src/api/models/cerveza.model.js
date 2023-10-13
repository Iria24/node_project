const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const cervezaSchema = new Schema({
    nombre: { type: String, require:true },
    procedencia: { type: String, require:true },
    gradoAlcohol: { type: Number },
    ingredientes: {type: String },
    categoria: { type: String }
},{
    collection: "cervezas"
});

//tipos de datos: String, Number, Array, Date, Mixed, Boolean, ObjectId

const Cerveza = mongoose.model("cervezas", cervezaSchema)
module.exports = Cerveza;