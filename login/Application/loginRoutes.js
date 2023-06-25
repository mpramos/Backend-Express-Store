const express = require('express');
const LoginController = require('./loginController');

const router = express.Router();
//const loginController = new LoginController();

// Ruta de inicio de sesión
router.get('/',(req,res)=>{

res.send('Estamos dentro de aplication')
});

module.exports = router;