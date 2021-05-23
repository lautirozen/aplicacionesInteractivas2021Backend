var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var UserSchema = new mongoose.Schema({
    titulo: String,
    categoria: String,
    precio: String,
    marca: String,
    descripcion: String,
    codigo: String,
    stock: Float32Array,
    image: String,
    cantidad: Float32Array,
    ptotal:Float32Array
}, {collection: "productos"})
/*id: 1,
        titulo: "Cafetera Bialetti Moka Express 18 pocillos",
        categoria: "cafe y te",
        precio: "21899.00",
        marca: "Bialetti",
        descripcion:"Con el Bialetti moka, el placer de tomar un café se convierte en un ritual diario. Su investigación en los mejores materiales garantiza un resultado eficiente, combinando un diseño refinado con el respeto por el sabor del mejor café tradicional. Material: Acero Capacidad: 18 pocillos.",
        codigo:"bia18p",
        stock:15,
        image:cafeterabialetti,
        cantidad:1,
        ptotal:0,*/
UserSchema.plugin(mongoosePaginate)
const Producto = mongoose.model('Producto', UserSchema)

module.exports = Producto;