//const obtenerInformes = '../controllers/google.controller'; // Asegúrate de que esta ruta sea correcta


let GoogleSheet = require('../spreadsheet');


const obtenerInformes = async (req,res)=>{
    readDataResponse = await GoogleSheet.accederGoogleSheet();
    res.render('index',{readDataResponse})
}
const pintarForm = async (req,res)=>{
  
  res.render('index',{readDataResponse})
}

const guardarForm = async (req,res)=>{
  GoogleSheet.guardarForm(req.body);
  res.redirect('/');
}

module.exports = {
    obtenerInformes, pintarForm, guardarForm
};
  