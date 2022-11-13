const salesModel = require('../models/salesModel');
const validateSales = require('./validations/validateSales');

const registerSales = async (sales) => {
  const error = await validateSales.validateNewSales(sales);
  if (error.type) return error;

  const saleId = await salesModel.insertSale();
  await Promise.all(
    sales.map(async ({ productId, quantity }) =>
      salesModel.insertSaleProduct(saleId, productId, quantity)),
  );
  
  return {
    type: null,
    message: {
      id: saleId,
      itemsSold: sales,
    },
  };
};

const getAllSales = async () => {
  const sales = await salesModel.getAllSales();
};

const getByIdSales = async (id) => {

};

module.exports = {
  registerSales,
  getAllSales,
  getByIdSales,
};
