const { GoogleSpreadsheet } = require('google-spreadsheet');

const { google } = require('googleapis');

// Cargar las credenciales desde el archivo JSON

const credenciales = require('./json/credenciales.json');
// Crear un cliente OAuth2 con las credenciales
const auth = new google.auth.GoogleAuth({
  credentials: credenciales,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});


/*async function accederGoogleSheet() {
  try {
    // Obtener una instancia del cliente de Google Sheets
    const sheets = google.sheets({ version: 'v4', auth });

    // ID de la hoja de Google Sheets que deseas leer/escribir
    const spreadsheetId = '1XG_KJHAvb-obePiPFwyuuQn3RJagC64i7onbO7YUiAs';

    // Leer datos desde la hoja
    const readDataResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'BASE_ENCUESTA!A1:L2', // Especifica el rango de celdas que deseas leer
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

accederGoogleSheet();*/



async function escribirEnGoogleSheet(formData) {
  console.log('Escribiendo en Google Sheets...',formData);
  try{
    const sheets = google.sheets({ version: 'v4', auth });

    // ID de la hoja de Google Sheets que deseas leer/escribir
    const spreadsheetId = '1XG_KJHAvb-obePiPFwyuuQn3RJagC64i7onbO7YUiAs';

    const sheet = await sheets.spreadsheets.get({
      spreadsheetId,
    });

    // Obtener la última fila utilizada
    const lastUsedRow = sheet.rowCount + 1; // La próxima fila disponible

    // Definir el rango usando la última fila disponible
    const sheetTitle = 'BASE_ENCUESTA'; // Cambia esto con el título de tu hoja
    
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetTitle}!A2`, // Cambia esto para apuntar a la primera celda de la siguiente fila disponible
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [
          [
            formData.fechaHoraSolicitud,
            formData.fechaHoraFinalizado,
            formData.mesFinalizado,
            formData.tipoAtencion,
            formData.estado,
            formData.prioridad,
            
            formData.descripcionProblema,
            formData.solicitadoPor,
            formData.area,
            formData.cargo,
            formData.atendidoPor,
            formData.solucion,
          ],
        ],
      },
    });
    console.log('Datos a escribir:', formData);
    console.log('Fin de la escritura en Google Sheets...');
    console.log('Datos escritos en la hoja de cálculo.');
  } catch (err) {
    console.error('Error al escribir en la hoja de cálculo:', err.message);
  }
}


module.exports = {
  //accederGoogleSheet : accederGoogleSheet,
  
  escribirEnGoogleSheet : escribirEnGoogleSheet
}

