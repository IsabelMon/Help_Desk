const express = require('express');

const  {google} = require('googleapis');

const app = express();

//rutas
app.set('views', './src/views');
app.set('view engine', 'pug');


app.use(require('./routes/google.routes'));


//app.get("/", (req, res) =>{
//   res.send("Hola grupo");
//});
module.exports = app;