/*
   Ruta: /api/login
*/

const {Router} = require('express');
const {check} = require('express-validator');

const {login} = require('../controllers/auth');
const {validarCampos} = require('../middlewares/validar-campos');


const router = Router();

// Add routes
router.post ('/',[
    check('email','El email no debe estar vacio').isEmail(),
    check('password','El password no debe estar vacio').not().isEmpty(),
    validarCampos
], login);

module.exports = router;
