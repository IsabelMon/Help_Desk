const express = require('express');
const bodyParser = require('body-parser');
const  {google} = require('googleapis');

const app = express();

//rutas
app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/enviar-datos', (req, res) => {
    const nombre = req.body.nombre;
    const correo = req.body.correo;
  
    // Realiza las acciones necesarias con los datos
    // Por ejemplo, puedes guardarlos en una base de datos
  
    res.send(`Datos recibidos: Nombre - ${nombre}, Correo - ${correo}`);
  });

app.use(require('./routes/google.routes'));


//app.get("/", (req, res) =>{
//   res.send("Hola grupo");
//});
module.exports = app;