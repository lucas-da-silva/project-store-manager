const productsModel = require('../../models/productsModel');

const validateProductId = async (id) => {
  const product = await productsModel.findById(id);
  if (!product) return { type: 'NOT_FOUND', message: 'Product not found' };
  return { type: null };
};

const validateNameLength = (name) => {
  if (name.length < 5) {
    return {
      type: 'FIELD_INVALID',
      message: '"name" length must be at least 5 characters long',
    };
  }
  return { type: null };
};

module.exports = {
  validateProductId,
  validateNameLength,
};