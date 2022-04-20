const Usuario = require('../models/usuario');

const getUsuarios =(req,res) => {
    res.json({
        ok : true,
        msg : 'get Usuarios'
    })
};


const crearUsuario = async (req,res) => {

    const {nombre,password,email} = req.body;
    const usuario = new Usuario(req.body);

    await usuario.save();

    res.json({
        ok : true,
        usuario
    })
};

module.exports = { 
    getUsuarios,
    crearUsuario
}