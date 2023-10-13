const mongoose = require("mongoose");
const url = 'mongodb+srv://iria:17-11-2020@cluster0.s2kdzre.mongodb.net/proyectocervezas?retryWrites=true&w=majority';
const connectDb = async() => {
    try {
        const dataBase = await mongoose.connect(url,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        const {name, host} = dataBase.connection
        console.log(`Nombre de la BD Base de Datos ${name} host : ${host}`);
        
    } catch (error) {
        console.log(error);        
    }
}

module.exports={connectDb}