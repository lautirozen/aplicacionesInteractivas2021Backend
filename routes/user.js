var express = require('express')
var router = express.Router()
var UserController = require('../controllers/users.controller');


// Authorize each API with middleware and map to the Controller Functions
/* GET users listing. */
router.get('/test', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/user');
  });
router.post('/registration', UserController.createUser)
router.post('/login', UserController.loginUser)
router.get('/users', UserController.getUsers)
router.get('/user/profile', UserController.getUsersByMail)
router.post('/user/update/password', UserController.updateUser)




// Export the Router
module.exports = router;



//api/users
//api/users/registration
//api/users/login
