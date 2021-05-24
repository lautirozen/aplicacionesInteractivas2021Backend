var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var UserSchema = new mongoose.Schema({
    titulo: {type:String,required: true, unique: true} ,
    categoria: {type:String,required: true},
    precio: {type:String,required: true},
    marca: {type:String,required: true},
    descripcion: {type:String,required: true},
    codigo: {type:String,required: true},
    stock: {type:Number,required: true},
    image: {type:String,required: true, unique: true},
    cantidad: {type:Number,required: true},
    ptotal:{type:mongoose.Decimal128 ,required: true}
}, {collection: "productos"})

UserSchema.plugin(mongoosePaginate)
const Producto = mongoose.model('Producto', UserSchema)

module.exports = Producto;