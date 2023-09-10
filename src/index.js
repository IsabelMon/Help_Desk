const app = require('./app');
/*
app.listen(3000, ()=>{
    console.log('Servidor all right');
});*/

/*const express = require("express");
const app = express();*/

// This line is important to ensure your app listens to the PORT env var
const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});