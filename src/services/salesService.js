const salesModel = require('../models/salesModel');
const validateSales = require('./validations/validateSales');

const registerSales = async (sales) => {
  const error = await validateSales.validateSales(sales);
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
  const doesSaleNotExit = await validateSales.validateIdSale(saleId);
  if (doesSaleNotExit.type) return doesSaleNotExit;

  const salesProducts = await salesModel.getSalesProducts(saleId);

  const formatedSale = salesProducts.map(({ productId, quantity }) => ({
    date: doesSaleNotExit.message.date,
    productId,
    quantity,
  }));

  return { type: null, message: formatedSale };
};

const deleteSale = async (saleId) => {
  const doesSaleNotExit = await validateSales.validateIdSale(saleId);
  if (doesSaleNotExit.type) return doesSaleNotExit;
  await salesModel.deleteSale(saleId);
  return { type: null };
};

const updateSale = async (saleId, sales) => {
  const doesSaleNotExit = await validateSales.validateIdSale(saleId);
  if (doesSaleNotExit.type) return doesSaleNotExit;
  
  const error = await validateSales.validateSales(sales);
  if (error.type) return error;

  const oldSales = await salesModel.getSalesProducts(saleId); 
  await Promise.all(
    sales.map(async (sale, index) => {
      await salesModel.updateSale(saleId, sale, oldSales[index]);
    }),
  );

  return { type: null, message: { saleId, itemsUpdated: sales } };
};

module.exports = {
  registerSales,
  getAllSales,
  getByIdSales,
  deleteSale,
  updateSale,
};
