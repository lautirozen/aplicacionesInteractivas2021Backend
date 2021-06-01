var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var UserSchema = new mongoose.Schema({
    usuario: {type:String,required: true, unique: true} ,
    rol: {type:String,required: true} ,
    nombre: {type:String,required: true} ,
    apellido: {type:String,required: true},
    email: {type:String,required: true},
    contraseña: {type:String,required: true},
    pregunta: {type:String,required: true},
    respuesta: {type:String,required: true},
})

UserSchema.plugin(mongoosePaginate)
const User = mongoose.model('User', UserSchema)

module.exports = User;