// Gettign the Newly created Mongoose Model we just created 
var Pedido = require('../models/Pedido.model');
//var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// Saving the context of this module inside the _the variable
_this = this

exports.getPedidos = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Pedidos = await Pedido.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Pedidos;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Pedidos');
    }
}

exports.createPedido = async function (pedido) {
    // Creating a new Mongoose Object by using the new keyword

    var newPedido = new Pedido({
        nroPedido: pedido.nroPedido,
        fecha: pedido.fecha,
        precioTotal: pedido.precioTotal,
        direccion: pedido.direccion,
        productos: [
            {
                titulo: pedido.titulo,
                categoria: pedido.categoria,
                precio: pedido.precio,
                marca: pedido.marca,
                descripcion: pedido.descripcion,
                codigo: pedido.codigo,
                stock: pedido.stock,
                image: pedido.image,
                cantidad: pedido.cantidad,
                ptotal:pedido.ptotal,
            }
        ],
        nombre: pedido.nombre,
        apellido: pedido.apellido,
        userId: pedido.userId
    })

    try {
        // Saving the product
        var savedPedido = await newPedido.save();
        return newPedido;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)
        throw Error("Error while Creating Pedido")
    }
}
