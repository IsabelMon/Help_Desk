const express = require('express');
const bodyParser = require('body-parser');
const { escribirEnGoogleSheet } = require('./spreadsheet'); // Importa la función escribirEnGoogleSheet

const app = express();

//rutas
app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));


// Rutas
app.get('/', (req, res) => {
  res.render('index'); // Renderiza el formulario en la página principal
});
app.post('/', escribirEnGoogleSheet);

/*app.post('/index', async (req, res) => {
  const formData = req.body;

  try {
    // Llama a la función para escribir en Google Sheets con los datos del formulario
    await escribirEnGoogleSheet.escribirEnGoogleSheet(formData);

    res.send('Datos recibidos y procesados con éxito.');
  } catch (err) {
    console.error('Error:', err.message);
    res.send('Error al procesar los datos.');
  }
});*/



app.use(require('./routes/google.routes'));

module.exports = app;