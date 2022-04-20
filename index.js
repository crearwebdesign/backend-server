require('dotenv').config(); // para tomar las variables que estan en el archivo .env

const express = require('express');


const cors = require('cors');

const {dbConnection} = require('./database/config');

// crear el servidor express
const app = express();

// configurar CORS
app.use(cors());

// lectura y parseo del body
app.use(express.json());

// base de datos
dbConnection();

// rutas 

app.use('/api/usuarios', require('./routes/usuarios'));


// el process.env.PORT viene del require('dotenv')
app.listen(process.env.PORT, () =>{
    console.log('Server running at port ' + process.env.PORT)
})