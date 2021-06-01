var ProductoService = require('../services/producto.service');


// Saving the context of this module inside the _the variable
_this = this;

// Async Controller function to get the To do List
exports.getProductos = async function (req, res, next) {

    // Check the existence of the query parameters, If doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 30;
    try {
        var Productos = await ProductoService.getProductos({}, page, limit)
        // Return the Users list with the appropriate HTTP password Code and Message.
        return res.status(200).json({status: 200, data: Productos, message: "Succesfully Users Recieved testing"});
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createProducto = async function (req, res, next) {
    // Req.Body contains the form submit values.
    console.log("llegue al controller",req.body)
    var Producto = {
        titulo: req.body.titulo,
        categoria: req.body.categoria,
        precio: req.body.precio,
        marca: req.body.marca,
        descripcion: req.body.descripcion,
        codigo: req.body.codigo,
        stock: req.body.stock,
        image: req.file.path,
        cantidad: req.body.cantidad,
        ptotal:req.body.ptotal,
    }
    try {
        // Calling the Service function with the new object from the Request Body
        var createdProducto = await ProductoService.createProducto(Producto)
        return res.status(201).json({createdProducto, message: "Succesfully Created Producto"})
    } catch (e) {
        //Return an Error Response Message with Code and the Error Message.
        console.log(e)
        return res.status(400).json({status: 400, message: "Producto Creation was Unsuccesfull"})
    }
}


exports.updateProducto = async function (req, res, next) {
    console.log('as ',req.body)
    // Id is necessary for the update
    if (!req.body.titulo) {
        return res.status(400).json({status: 400., message: "Name be present"})
    }

    
    var Producto = {
       
        titulo: req.body.titulo ? req.body.titulo : null,
        categoria: req.body.categoria ? req.body.categoria : null,
        precio: req.body.precio ? req.body.precio : null,
        marca: req.body.marca ? req.body.marca : null,
        descripcion: req.body.descripcion ? req.body.descripcion : null,
        codigo: req.body.codigo ? req.body.codigo : null,
        stock: req.body.stock ? req.body.stock : null,
        image: req.file.path ? req.file.path : null,
        cantidad: req.body.cantidad ? req.body.cantidad : null,
        ptotal: req.body.ptotal ? req.body.ptotal : null


    }
    try {
        var updatedProducto = await ProductoService.updateProducto(Producto)
        return res.status(200).json({status: 200, data: updatedProducto, message: "Succesfully Updated Producto"})
    } catch (e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeProducto = async function (req, res, next) {

    var id = req.body.id;
    try {
        var deleted = await ProductoService.deleteProducto(id);
        res.status(200).send("Succesfully Deleted... ");
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message})
    }
}
