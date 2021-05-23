// Gettign the Newly created Mongoose Model we just created 
var Producto = require('../models/Producto.model');
//var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

exports.getProductos = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Productos = await Producto.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Productos;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Productos');
    }
}

exports.createProducto = async function (producto) {
    // Creating a new Mongoose Object by using the new keyword
    
    var newProducto = new Producto({
        titulo: producto.titulo,
        categoria: producto.categoria,
        precio: producto.precio,
        marca: producto.marca,
        descripcion: producto.descripcion,
        codigo: producto.codigo,
        stock: producto.stock,
        image: producto.image,
        cantidad: producto.cantidad,
        ptotal:producto.ptotal
        
        
    })

    try {
        // Saving the product
        var savedProducto = await newProducto.save();
        var token = jwt.sign({
            id: savedProducto._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating Producto")
    }
}
