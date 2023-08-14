const { GoogleSpreadsheet } = require('google-spreadsheet');
const { google } = require('googleapis');

// Cargar las credenciales desde el archivo JSON

const credenciales = require('./json/credenciales.json');
// Crear un cliente OAuth2 con las credenciales
const auth = new google.auth.GoogleAuth({
  credentials: credenciales,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});


async function accederGoogleSheet() {
  try {
    // Obtener una instancia del cliente de Google Sheets
    const sheets = google.sheets({ version: 'v4', auth });

    // ID de la hoja de Google Sheets que deseas leer/escribir
    const spreadsheetId = '1XG_KJHAvb-obePiPFwyuuQn3RJagC64i7onbO7YUiAs';

    // Leer datos desde la hoja
    const readDataResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'BASE_ENCUESTA!A1:B10', // Especifica el rango de celdas que deseas leer
    });

    const rows = readDataResponse.data.values;
    if (rows.length) {
      console.log('Datos leídos:');
      rows.forEach((row) => {
        console.log(`${row[0]}, ${row[1]}`);
      });
    } else {
      console.log('No se encontraron datos.');
    }


    console.log('Datos escritos con éxito.');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

accederGoogleSheet();



async function escribirEnGoogleSheet(formData) {
  const doc = new GoogleSpreadsheet('1XG_KJHAvb-obePiPFwyuuQn3RJagC64i7onbO7YUiAs'); // Cambia esto con tu ID de hoja de cálculo

  try {
    await doc.useServiceAccountAuth(auth); // Utiliza el objeto 'auth' para la autenticación
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    await sheet.addRow({
      FechaHoraSolicitud: formData.fechaHoraSolicitud,
      FechaHoraFinalizado: formData.fechaHoraFinalizado,
      // ... otros campos
    });

    console.log('Datos escritos en la hoja de cálculo.');
  } catch (err) {
    console.error('Error al escribir en la hoja de cálculo:', err.message);
  }
}



module.exports = {
  accederGoogleSheet : accederGoogleSheet,
  
  escribirEnGoogleSheet : escribirEnGoogleSheet
}

