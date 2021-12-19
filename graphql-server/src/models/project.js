const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('./user')

const ProjectSchema = new Schema({
    nombre:{type:String},
    objetivo : {type:String},
    presupuesto : {type:String},
    fechaInicio: {type:String},
    fechaFin: {type:String},
    owner : {
        type: Schema.Types.ObjectId,
        ref: "User"    
    },
    is_active : {type:Boolean},
    fase_proyecto: {type: String}
})

module.exports = mongoose.model("Project",ProjectSchema)