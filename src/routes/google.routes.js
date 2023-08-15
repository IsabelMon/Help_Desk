const {Router} =  require('express');
const { escribirEnGoogleSheet, obtenerInformes} = require('../controllers/google.controlle');
const router = Router();

router.get('/', obtenerInformes);
router.get('/', (req, res) => {
    // Manejo de la ruta GET (si es necesario)
});
router.post('/index', escribirEnGoogleSheet);
/*router.post('/index', async (req, res) => {
    const formData = req.body;
  
    try {
      // Llama a la función para escribir en Google Sheets con los datos del formulario
      await escribirEnGoogleSheet(formData);
  
      res.send('Datos recibidos y procesados con éxito.');
    } catch (err) {
      console.error('Error:', err.message);
      res.send('Error al procesar los datos.');
    }
  });*/

module.exports = router;