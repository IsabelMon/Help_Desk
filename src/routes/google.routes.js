const {Router} =  require('express');
const { obtenerInformes } = require('../controllers/google.controlle');


const router = Router();


router.get('/' , obtenerInformes);

module.exports = router;