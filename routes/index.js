const express = require('express');
const router = express.Router();
const authenticate = require('../middlewares/authentication');

// Add the required routes
router.use('/auth', require('./auth'));


router.use('/Cliente', authenticate, require('./Cliente'));
router.use('/MaterialMedico',authenticate,require('./MaterialMedico'));
router.use('/Vendedor', authenticate, require('./Vendedor'));
router.use('/Venta', authenticate, require('./Venta'));

module.exports = router;