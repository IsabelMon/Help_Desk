const {Router} =  require('express');
const { obtenerInformes, pintarForm, guardarForm} = require('../controllers/google.controlle');


const router = Router();


router.get('/' , obtenerInformes);
//router.get('/' , pintarForm);
router.post('/', guardarForm);
router.post('/', obtenerInformes);
module.exports = router;