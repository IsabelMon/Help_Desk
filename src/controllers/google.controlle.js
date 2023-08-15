//const obtenerInformes = '../controllers/google.controller'; // Asegúrate de que esta ruta sea correcta
let GoogleSheet = require('../spreadsheet');


const obtenerInformes = async (req,res)=>{
    readDataResponse = await GoogleSheet.accederGoogleSheet();
    res.render('index',{readDataResponse})
}

const escribirEnGoogleSheet = async (req,res)=>{

  GoogleSheet.escribirEnGoogleSheet(req.body);

}

module.exports = {
    obtenerInformes,  
    escribirEnGoogleSheet,
};
  