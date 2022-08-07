/*
   Ruta: /api/login
*/

const {Router} = require('express');
const {check} = require('express-validator');

const {login, googleSignIn} = require('../controllers/auth');
const {validarCampos} = require('../middlewares/validar-campos');


const router = Router();

// Add routes
router.post ('/',[
    check('email','El email no debe estar vacio').isEmail(),
    check('password','El password no debe estar vacio').not().isEmpty(),
    validarCampos
], login);

router.post ('/google',[
    check('token','El Token de Google es Obligatorio').not().isEmpty(),
    validarCampos
], googleSignIn);



module.exports = router;
