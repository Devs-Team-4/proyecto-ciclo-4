const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScheme = new Schema({
    nombre:{type:String,required:false,default:"N.N"},
    apellido: {type:String},
    identificacion : {type:String},
    correo: {type:String},
    password : {type:String},
    rol : {type:String}
})

module.exports = mongoose.model("User",userScheme)