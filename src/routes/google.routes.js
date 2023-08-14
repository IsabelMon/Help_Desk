const {Router} =  require('express');
const { obtenerInformes, pintarForm, guardarForm, escribirEnGoogleSheet} = require('../controllers/google.controlle');
const router = Router();
//router.get('/' , obtenerInformes);
//router.get('/' , pintarForm);

//router.post('/', obtenerInformes);

// Definir rutas
router.get('/', (req, res) => {
    // Manejo de la ruta GET (si es necesario)
});

router.post('/', escribirEnGoogleSheet);

module.exports = router;