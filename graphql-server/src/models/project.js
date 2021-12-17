const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const user = require('./user');

const projectSchema = new Schema({
    nombre:{type:String},
    objetivo : {type:String},
    presupuesto : {type:String},
    fechaInicio: {type:Date,default: Date.now},
    fechaFin: {type:Date},
    owner : {
        type:Schema.Types.ObjectId,
        ref: "user"    
    },
    is_active : {type:Boolean},
    fase_proyecto: {type: String,default: "null",
    }
})

module.exports = mongoose.model("Project",projectSchema)