var express = require('express')
var router = express.Router()
var ProductoController = require('../controllers/productos.controller');
router.get('/test', function (req, res, next) {
    res.send('Llegaste a la ruta de  api/user');
});
router.get('/todos', ProductoController.getProductos)
// Export the Router
module.exports = router;
