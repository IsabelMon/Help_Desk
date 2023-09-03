const express = require('express');
const bodyParser = require('body-parser');
const { escribirEnGoogleSheet } = require('./spreadsheet'); // Importa la función escribirEnGoogleSheet
const usuariosCargos = require('./views/usuariosCargos');
const app = express();
const path = require('path')

//app.set('views', './src/views');
///app.set('view engine', 'pug');
// si no lleva esto no funciona , es lo que maneja el body
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('views'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/buscarequipos.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', '/buscarequipos.html'));
});


app.get('/usuariosCargos.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'usuariosCargos.js'));
});

app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'script.js'));
});
app.get('/typeahead.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'typeahead.js'));
});

app.get('/', (req, res) => {
  res.render('index', { usuariosCargos }); // Pasa el objeto usuariosCargos a la vista
});


app.post('/', (req, res) => {
  console.log("🚀 datos del body:", req.body)

  const selectedUsuario = req.body.solicitadoPor;
  const selectedCargo = usuariosCargos[selectedUsuario] || '';

  //mandamos los parametro a la funcion 
  escribirEnGoogleSheet({ selectedUsuario, selectedCargo, ...req.body })
  // res.render('index', { selectedUsuario, selectedCargo, usuariosCargos });
  res.send('ok')
});

//no sirve esto
app.post('/', escribirEnGoogleSheet);

app.use(require('./routes/google.routes'));
module.exports = app;