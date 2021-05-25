var express = require('express')
var router = express.Router()
var PedidoController = require('../controllers/pedidos.controller');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/user');
  });
router.post('/crear',  PedidoController.createPedido)
router.get('/todos', PedidoController.getPedidos)
//router.get('/:id', PedidoController.getPedidoPorUser)
//router.post('/actualizar', upload.single('image') , PedidoController.updatePedido)
//router.post('/deshabilitar', PedidoController.removePedido)


module.exports = router;