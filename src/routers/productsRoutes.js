const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getByIdProduct);
router.post('/', productsController.addNewProduct);

module.exports = router;