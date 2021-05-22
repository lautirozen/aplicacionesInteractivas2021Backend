var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var UserSchema = new mongoose.Schema({
    usuario: String,
    rol: String,
    nombre: String,
    apellido: String,
    email: String,
    contraseña: String,
    pregunta: String,
    respuesta: String,
})

UserSchema.plugin(mongoosePaginate)
const User = mongoose.model('User', UserSchema)

module.exports = User;