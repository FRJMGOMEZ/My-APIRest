
require('../config/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//Tanto get como post , pist etc... son simples convecciones.. es decir, cada uno de ellos puede realizar todas los tipos de peticiones.

//Las dos funciones de abajo son middlewares. Se ejecutan automáticamente cuando se ejecuta el código.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get('/usuario', (req, res)=> {
  res.json('getUsuario')

})

app.post('/usuario/', (req, res)=> {

  let body = req.body;

  if(body.nombre === undefined){res.status(400).json({ok:false,
                                                      mensaje:'name is required'})}

  else{res.json({body})};
})

//Es importante diferenciar entre ruta y parametro.En el caso de abajo, id es el parametro que introducimos.
app.put('/usuario/:id', (req, res)=> {

    let id = req.params.id;

  res.json({id})
})

app.delete('/', (req, res)=> {
  res.json('deletePost')
})

app.listen(process.env.PORT,()=>{console.log(`Escuchando puerto ${process.env.PORT}`)})
