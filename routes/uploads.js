/*
   ruta : api/upload

 */

const {Router} = require('express');
const expressFileUpload = require('express-fileupload');

const {validarJWT} = require('../middlewares/validar-jwt');

const {fileUpLoad} = require('../controllers/uploads');



const router = Router();

router.use(expressFileUpload()); //middleware que prepara la subida del archivo en cuetion
router.put('/:tipo/:id',validarJWT,fileUpLoad);


module.exports = router;




