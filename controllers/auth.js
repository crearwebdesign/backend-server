const { response } = require('express');
const bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');




const login = async(req, res = response)=>{

    const uid = req.params.id;
    const { email, password } = req.body;

    try {

        // Verificar email
        const usuarioDB = await Usuario.findOne({email});
        if (!usuarioDB){
            return res.status(404).json({
                ok : false,
                msg : 'E-mail no encontrado'
            })
        };

        // Verificar Contraseña

        const passwordValidado = bcrypt.compareSync(password,usuarioDB.password);
        if (!passwordValidado){
            return res.status(400).json({
                ok : false,
                msg : 'Contraseña no Valida'
            })
        };

        // Generar el Tokehn - JWT

        const token = await generarJWT(usuarioDB.id);



        res.status(200).json({
            ok : true,
            token
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok : false,
            msg : 'Error del Servidor'
        })
        
    }

};

const googleSignIn = async (req, res = response) => {

    res.json ({
        ok : true,
        msg : req.body.token
    })

};

module.exports = {login, googleSignIn}