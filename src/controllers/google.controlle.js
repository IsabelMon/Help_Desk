let GoogleSheet = require('../spreadsheet');
const escribirEnGoogleSheet = async (req,res)=>{
  GoogleSheet.escribirEnGoogleSheet(req.body);
}
module.exports = {
    escribirEnGoogleSheet,
    
};
  