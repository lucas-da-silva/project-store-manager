const productsModel = require('../models/productsModel');
const validateProducts = require('./validations/validateProducts');

const getAllProducts = async () => {
  const products = await productsModel.findAll();
  return { message: products };
};

const getByIdProduct = async (id) => {
  const product = await productsModel.findById(id);
  if (!product) return { type: 'NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

const addNewProduct = async (name) => {
  const doesNameInvalid = validateProducts.validateNameLength(name);
  if (doesNameInvalid.type) return doesNameInvalid;
  const productId = await productsModel.insert(name);
  const product = await productsModel.findById(productId);
  return { type: null, message: product };
};

const updateProduct = async (id, name) => {
  const doesNameInvalid = validateProducts.validateNameLength(name);
  if (doesNameInvalid.type) return doesNameInvalid;

  const productDoesNotExist = await validateProducts.validateProductId(id);
  if (productDoesNotExist.type) return productDoesNotExist;
  
  await productsModel.update(id, name);
  return { type: null, message: { id, name } };
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  addNewProduct,
  updateProduct,
};
