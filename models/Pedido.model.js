var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var UserSchema = new mongoose.Schema({
        nroPedido: {type:String,required: true, unique: true},
        fecha: {type:String,required: true} ,
        precioTotal: {type:mongoose.Decimal128,required: true},
        direccion: {type:String,required: true},
        productos: [
            {
                titulo: {type:String,required: true} ,
                categoria: {type:String,required: true},
                precio: {type:String,required: true},
                marca: {type:String,required: true},
                descripcion: {type:String,required: true},
                codigo: {type:String,required: true},
                stock: {type:Number,required: true},
                image: {type:String,required: true},
                cantidad: {type:Number,required: true},
                ptotal:{type:mongoose.Decimal128 ,required: true},
            },
        ],
        nombre:  {type:String,required: true},
        apellido: {type:String,required: true},
        userId:  {type:String,required: true},
    
    
}, {collection: "pedidos"})

UserSchema.plugin(mongoosePaginate)
const Pedido = mongoose.model('Pedido', UserSchema)

module.exports = Pedido;