require('dotenv').config(); // para tomar las variables que estan en el archivo .env

const express = require('express');


const cors = require('cors');

const {dbConnection} = require('./database/config');

// crear el servidor express
const app = express();

// configurar CORS
app.use(cors());

// base de datos
dbConnection();

// rutas 

app.get('/', (req,res) => {
    res.json({
        ok : true,
        msg : 'Hola Mundo'
    })
});


// el process.env.PORT viene del require('dotenv')
app.listen(process.env.PORT, () =>{
    console.log('Server running at port ' + process.env.PORT)
})