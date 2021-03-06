require('../config/config');

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//Tanto get como post , pist etc... son simples convecciones.. es decir, cada uno de ellos puede realizar todas los tipos de peticiones.

//Las tres funciones de abajo son middlewares. Se ejecutan automáticamente cuando se ejecuta el código
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB,{ useNewUrlParser: true },
(error,respuesta)=>{

  if(error){throw error}

  else{console.log('Conexion con la base de datos establecida')}
})



app.listen(process.env.PORT,()=>{console.log(`Escuchando puerto ${process.env.PORT}`)})
