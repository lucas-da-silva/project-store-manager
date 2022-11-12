const express = require('express');
const salesController = require('../controllers/salesController');
const validateSalesFields = require('../middlewares/validateSalesFields');

const router = express.Router();

router.post('/', validateSalesFields, salesController.registerSales);

module.exports = router;
