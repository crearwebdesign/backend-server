const {response} = require('express');

const Hospital = require('../models/hospital');

const getHospitales = (req, res = response) => {
    res.json({
        ok : true,
        msg : 'getHospitales'
    })
};


const crearHospital = async (req, res = response) => {
    
    const uid = req.uid;
    const hospital = new Hospital({
        usuario : uid,
        ...req.body});

    
    try {

        const hospitaldb = await hospital.save();
        res.json({
            ok : true,
            hospital : hospitaldb
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok : false,
            msg : " Hable con el Administrador"
        })
        
    }


};

const actualizarHospital = (req, res = response) => {
    res.json({
        ok : true,
        msg : 'actualizarHospital'
    })
};

const borrarHospital = (req, res = response) => {
    res.json({
        ok : true,
        msg : 'borrarHospital'
    })
};





module.exports = {
    getHospitales,
    crearHospital,
    actualizarHospital,
    borrarHospital
}