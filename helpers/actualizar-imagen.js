const fs = require('fs');

const Usuario = require('../models/usuario');
const Medico = require('../models/medicos');
const Hospital = require('../models/hospital');



const actualizarImagen = async (tipo, id, nombreArchivo) => {

    switch (tipo) {
        case 'medicos':
            const medico = await Medico.findById(id);
            if (!medico){
                console.log('Id no corresponde a ningún médico');
                return false
            }

            const pathViejo = `./uploads/medicos/${medico.img}`;
            //console.log(pathViejo);
            //let fileExists = fs.existsSync(pathViejo);
            //console.log("hello exists:", fileExists);
            //if (fileExists) {
            //    console.log("deleting the file");
            //    fs.unlinkSync(pathViejo)
            //  }
            if (fs.existsSync(pathViejo)){
                 //borrar Imagen
                fs.unlinkSync(pathViejo)
            };

            medico.img = nombreArchivo;
            await medico.save();
            return true

        break;
        case 'hospitales':
        break;
        case 'usuarios':
        break;
    
    }

};

module.exports = {
    actualizarImagen
}