/*
    Ruta: /api/usuarios
*/

const {Router} = require('express');
const {check} = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const {getUsuarios, crearUsuario} = require('../controllers/usuarios');

const router = Router();

router.get('/', getUsuarios);

router.post('/',[
                 check('nombre','El Nombre es Obligatorio').not().isEmpty(),
                 check('password','El password es Obligatorio').not().isEmpty(),
                 check('email','El email es Obligatorio').isEmail(),
                 validarCampos
             ]
             ,crearUsuario);




module.exports = router;