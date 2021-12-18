const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Project = require('./project');

const userSchema = new Schema({
    nombre:{type:String},
    apellido: {type:String},
    identificacion : {type:String},
    correo: {type:String,required:true},
    password : {type:String,required:true},
    rol : {type:String},
    estado : {type:String},
    projects: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Project'
        }
    ]
})

module.exports = mongoose.model('User',userSchema)