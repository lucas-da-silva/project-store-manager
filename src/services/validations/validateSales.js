const productsModel = require('../../models/productsModel');
const errorMap = require('../../utils/errorMap');
const saleModel = require('../../models/salesModel');

const validateNewSales = async (sales) => {
  if (sales.some(({ quantity }) => Number(quantity) <= 0)) {
    return {
      type: 'QUANTITY_INVALID',
      message: '"quantity" must be greater than or equal to 1',
    };
  }

  const salesId = await Promise.all(
    sales.map(async ({ productId }) => productsModel.findById(productId)),
  );

  const someSaleIsMissing = salesId.some((sale) => sale === undefined);
  if (someSaleIsMissing) {
    return { type: 'NOT_FOUND', message: 'Product not found' };
  }

  return { type: null };
};

const validateIdSale = async (id) => {
  const sale = await saleModel.getSaleById(id);
  if (!sale) {
    return {
      type: 'NOT_FOUND',
      message: 'Sale not found',
    };
  }
  return { type: null, message: sale };
};

module.exports = {
  validateNewSales,
  validateIdSale,
};
