const { response } = require('express');

const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');

const getUsuarios = async (req, res) => {

    const usuarios = await Usuario.find({}, 'nombre email role google');
    res.json({
        ok: true,
        usuarios
    })
};


const crearUsuario = async (req, res = response) => {

    const { password, email } = req.body;

    try {

        const existeEmail = await Usuario.findOne({ email });

        if (existeEmail){
            return res.status(400).json({
                ok: false,
                msg : 'El correo ya esta registrado'
            })
        };

        const usuario = new Usuario(req.body);

        // Encryptar Contraseña

        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password,salt);

        // Guardar Usuario
        await usuario.save();

        res.json({
            ok: true,
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error Inesperado...Revisar logs'
        });
    };

};

const actualizarUsuario = async(req, res = response) => {
    
    const uid = req.params.id;

    try {

        res.json({
            ok : true,
            uid
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok : false,
            msg : 'Error inesperado'
        })
    }

};

module.exports = {
    getUsuarios,
    crearUsuario,
    actualizarUsuario
}