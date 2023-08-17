const express = require('express');
const bodyParser = require('body-parser');
const { escribirEnGoogleSheet } = require('./spreadsheet'); // Importa la función escribirEnGoogleSheet
const usuariosCargos = require('./views/usuariosCargos');
const app = express();


app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index', { usuariosCargos }); // Pasamos la variable usuariosCargos a la vista
});

app.post('/', (req, res) => {
  const selectedUsuario = req.body.solicitadoPor;
  const selectedCargo = usuariosCargos[selectedUsuario] || 'Cargo no encontrado';

  res.render('index', { selectedUsuario, selectedCargo, usuariosCargos });
});

app.post('/', escribirEnGoogleSheet);

app.use(require('./routes/google.routes'));
module.exports = app;