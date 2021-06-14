var express = require('express')
var router = express.Router()
var ProductoController = require('../controllers/productos.controller');
const upload = require("./utils/multer");

// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/user');
  });
router.post('/crear', upload.single('image') , ProductoController.createProducto)
router.get('/todos', ProductoController.getProductos)
router.post('/actualizar', upload.single('image') , ProductoController.updateProducto)
router.post('/deshabilitar', ProductoController.removeProducto)

/*router.get('/login', UserController.loginUser)
router.get('/users', UserController.getUsers)
router.get('/user/profile', UserController.getUsersByMail)
router.post('/user/update/password', UserController.updateUser)*/




// Export the Router
module.exports = router;



//api/users
//api/users/registration
//api/users/login