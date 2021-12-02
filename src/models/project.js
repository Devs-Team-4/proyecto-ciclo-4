const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user');

const projectSchema = new Schema({
    nombre:{type:String},
    objetivo : {type:String},
    presupuesto : {type:Number},
    fechaInicio: {type:Date},
    fechaFin: {type:Date},
    owner : {
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    is_active : {type:Boolean},
    fase_proyecto: {type: String,default: "null",
    }
})

module.exports = mongoose.model("Project",projectSchema)