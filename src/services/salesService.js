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
  const salesProducts = await Promise.all(
    sales.map(async ({ id }) => salesModel.getSalesProducts(id)),
  );

  const salesArray = [];
  salesProducts.forEach((sale) => salesArray.push(...sale));

  const formatedSale = salesArray.map((sale) => {
    const { date } = sales.find(({ id }) => Number(id) === Number(sale.saleId));
    return { ...sale, date };
  });

  return { message: formatedSale };
};

const getByIdSales = async (saleId) => {
  const error = await validateSales.validateIdSale(saleId);
  if (error.type) return error;

  const salesProducts = await salesModel.getSalesProducts(saleId);
  const formatedSale = salesProducts.map(({ productId, quantity }) => ({
    date: error.message.date,
    productId,
    quantity,
  }));

  return { type: null, message: formatedSale };
};

module.exports = {
  registerSales,
  getAllSales,
  getByIdSales,
};
