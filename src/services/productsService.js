const productsModel = require('../models/productsModel');

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
  if (name.length < 5) {
    return {
      type: 'FIELD_INVALID',
      message: '"name" length must be at least 5 characters long',
    };
  }
  const productId = await productsModel.insert(name);
  const product = await productsModel.findById(productId);
  return { type: null, message: product };
};

const updateProduct = async (id, name) => {

};

module.exports = {
  getAllProducts,
  getByIdProduct,
  addNewProduct,
  updateProduct,
};
