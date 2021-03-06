const {response} = require('express');
const Medico = require('../models/medicos');

const getMedicos = async (req, res = response) => {

    const medicos = await Medico.find()
                                .populate('usuario','nombre img')
                                .populate('hospital','nombre img');
                                
    res.json({
        ok : true,
        medicos
    })
};


const crearMedico = async (req, res = response) => {

    const uid = req.uid;
    const medico = new Medico({
        usuario : uid,        
        ...req.body});

    try {

        const medicodb = await medico.save();
        res.json({
            ok : true,
            medico : medicodb
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok : false,
            msg : 'Server Error, Call your administrator'
        })
    }
};

const actualizarMedico = (req, res = response) => {
    res.json({
        ok : true,
        msg : 'actualizarMedico'
    })
};

const borrarMedico = (req, res = response) => {
    res.json({
        ok : true,
        msg : 'borrarMedico'
    })
};





module.exports = {
    getMedicos,
    crearMedico,
    actualizarMedico,
    borrarMedico
}