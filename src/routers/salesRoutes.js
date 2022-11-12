const express = require('express');
const salesController = require('./productsRoutes');

const router = express.Router();

router.post('/', salesController.registerSales);

module.exports = router;