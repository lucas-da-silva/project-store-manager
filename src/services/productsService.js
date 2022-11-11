const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const products = await productsModel.findAll();
  return { message: products };
};

const getByIdProduct = async (id) => {
  const product = await productsModel.findById(id);
  if (!product) return { type: 'ID_NOT_FOUND', message: 'Product not found' };
  return { type: null, message: product };
};

module.exports = {
  getAllProducts,
  getByIdProduct,
};