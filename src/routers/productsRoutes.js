const express = require('express');
const productsController = require('../controllers/productsController');
const validateProductsFields = require('../middlewares/validateProductsFields');

const router = express.Router();

router.get('/', productsController.getAllProducts);
router.get('/:id', productsController.getByIdProduct);
router.post('/', validateProductsFields, productsController.addNewProduct);
router.put('/:id', validateProductsFields, productsController.updateProduct);

module.exports = router;
