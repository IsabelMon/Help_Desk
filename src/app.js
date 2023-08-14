const express = require('express');
const bodyParser = require('body-parser');
const  {google} = require('googleapis');

const app = express();

//rutas
app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/index', async (req, res) => {
  const formData = req.body;

  try {
    // Aquí llamas a la función en googleSheet.js para procesar los datos
    await escribirEnGoogleSheet(formData);

    res.send('Datos recibidos y procesados con éxito.');
  } catch (err) {
    console.error('Error:', err.message);
    res.send('Error al procesar los datos.');
  }
});
app.use(require('./routes/google.routes'));


//app.get("/", (req, res) =>{
//   res.send("Hola grupo");
//});
module.exports = app;