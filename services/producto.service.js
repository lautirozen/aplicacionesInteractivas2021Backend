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
        cloudinary_id: producto.cloudinary_id,
        cantidad: producto.cantidad,
        ptotal:producto.ptotal


    })

    try {
        // Saving the product
        var savedProducto = await newProducto.save();
        return newProducto;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)
        throw Error("Error while Creating Producto")
    }
}


exports.updateProducto = async function (producto) {
    
    var id = {id : producto.id}
    
    try {
        //Find the old User Object by the Id
        var oldProducto = await Producto.findOne(id);
    } catch (e) {
        throw Error("Error occured while Finding the Producto")
    }
    // If no old User Object exists return false
    if (!oldProducto) {
        throw Error("Error occured while Finding the Producto")
    }else{
        //Edit the User Object
        oldProducto.titulo = producto.titulo
        oldProducto.categoria = producto.categoria
        oldProducto.precio = producto.precio
        oldProducto.marca = producto.marca
        oldProducto.descripcion = producto.descripcion
        oldProducto.codigo = producto.codigo
        oldProducto.stock = producto.stock
        oldProducto.image = producto.image
        oldProducto.cloudinary_id = producto.cloudinary_id
        oldProducto.cantidad = producto.cantidad
        oldProducto.ptotal = producto.ptotal
        
        try {
            var savedProducto = await oldProducto.save()
            return savedProducto;
        } catch (e) {
            throw Error("And Error occured while updating the Producto");
        }
    }
}

exports.findById = async function (id) {
    console.log("id",id)
    // Creating a new Mongoose Object by using the new keyword
    try {
        // Find the User 
        var _details = await Producto.findOne({
            _id: id
        });
        return {_details};
    } catch (e) {
        // return a Error message describing the reason     
        throw Error("Error while finding product")
    }

}

exports.deleteProducto = async function (id) {

    // Delete the User
    try {
        var deleted = await Producto.remove({
            _id: id
        })
        console.log(id)
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("Producto Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the Producto")
    }
}
