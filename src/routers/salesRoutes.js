const express = require('express');
const salesController = require('../controllers/salesController');
const validateSalesFields = require('../middlewares/validateSalesFields');

const router = express.Router();

router.get('/', salesController.getAllSales);
router.get('/:id', salesController.getByIdSales);
router.post('/', validateSalesFields, salesController.registerSales);
router.delete('/:id', salesController.deleteSale);
router.put('/:id', validateSalesFields, salesController.updateSale);

module.exports = router;
