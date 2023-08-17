const {Router} =  require('express');
const { escribirEnGoogleSheet, } = require('../controllers/google.controlle');
const router = Router();
router.post('/index', escribirEnGoogleSheet);
module.exports = router;