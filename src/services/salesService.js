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
    sales.map(async ({ id }) => salesModel.getSaleProduct(id)),
  );

  const salesArray = [];
  salesProducts.forEach((sale) => salesArray.push(...sale));

  const formatedSale = salesArray.map(
    ({ sale_id: saleId, product_id: productId, quantity }) => {
      const { date } = sales.find(({ id }) => Number(id) === Number(saleId));
      return { saleId, date, productId, quantity };
    },
  );

  return { message: formatedSale };
};

const getByIdSales = async (saleId) => {};

module.exports = {
  registerSales,
  getAllSales,
  getByIdSales,
};
