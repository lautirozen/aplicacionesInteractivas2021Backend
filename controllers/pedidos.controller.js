var PedidoService = require('../services/pedido.service');


// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getPedidos = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 30;
    try {
        var Pedidos = await PedidoService.getPedidos({}, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Pedidos, message: "Succesfully Users Recieved testing"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createPedido = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)
    
    var Pedido = {
        nroPedido: req.body.nroPedido,
        fecha: req.body.fecha,
        precioTotal: req.body.precioTotal,
        direccion: req.body.direccion,
        productos: req.body.productos, /*[
            {
                titulo: req.body.productos.titulo,
                categoria: req.body.productos.categoria,
                precio: req.body.productos.precio,
                marca: req.body.productos.marca,
                descripcion: req.body.productos.descripcion,
                codigo: req.body.productos.codigo,
                stock: req.body.productos.stock,
                image: req.body.productos.image,//req.file.path,
                cantidad: req.body.productos.cantidad,
                ptotal:req.body.productos.ptotal,
            }
        ],*/
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        userId: req.body.userId
    }
    try {
        // Calling the Service function with the new object from the Request Body 
        var createdPedido = await PedidoService.createPedido(Pedido)
        return res.status(201).json({createdPedido, message: "Succesfully Created Pedido"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Pedido Creation was Unsuccesfull"})
    }
}

exports.getPedidoPorUsuario = async function (req, res, next) {

     // Req.Body contains the form submit values.
     console.log("body",req.body)
     var filtro = {
         userId: req.body.userId,
         
     }
     try {
         // Calling the Service function with the new object from the Request Body
         var pedidos = await PedidoService.getPedidoPorUsuario(filtro);
         return res.status(201).json({pedidos, message: "Succesfully retrieve"})
     } catch (e) {
         //Return an Error Response Message with Code and the Error Message.
         return res.status(400).json({status: 400, message: "Invalid username or password"})
     }
   
}