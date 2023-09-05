const express = require('express');
const bodyParser = require('body-parser');
const { escribirEnGoogleSheet } = require('./spreadsheet'); // Importa la función escribirEnGoogleSheet
const usuariosCargos = require('./views/js/usuariosCargos');
const axios = require('axios');
const app = express();
const path = require('path')
const cors = require('cors')
const urlArchivo = 'http://localhost:3000/src/views/js/usuariosCargos.js';


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();

})

app.use('/static', express.static(path.join(__dirname, 'views')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/html/login.html'));
});

app.get('/hojaEncuesta.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/html/hojaEncuesta.html'));
});
app.get('/buscarequipos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/html/buscarequipos.html'));
});

app.get('/sistemas', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/html/sistemas.html'));
});

app.get('/dosificacion', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/html/dosificacion.html'));
});


app.get('/usuariosCargos.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/js/usuariosCargos.js'));
});

app.get('/login.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/js/login.js'));
});
app.get('/script.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/js/script.js'));
});
app.get('/typeahead.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/js/typeahead.js'));
});

app.get('/', (req, res) => {
  res.render('hojaEncuesta', { usuariosCargos }); // Pasa el objeto usuariosCargos a la vista
});


app.post('/', (req, res) => {
  console.log("🚀 datos del body:", req.body)

  const selectedUsuario = req.body.solicitadoPor;
  const selectedCargo = usuariosCargos[selectedUsuario] || '';

  //mandamos los parametro a la funcion 
  escribirEnGoogleSheet({ selectedUsuario, selectedCargo, ...req.body })
res.render('index', { selectedUsuario, selectedCargo, usuariosCargos });
  res.send('ok')
});



//no sirve esto
app.post('/', escribirEnGoogleSheet);

app.use(require('./routes/google.routes'));
module.exports = app;