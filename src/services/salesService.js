// const salesModel = require('../models/salesModel');
const validateSales = require('./validations/validateSales');

const registerSales = async (sales) => {
  const error = await validateSales.validateNewSales(sales);
  if (error.type) return error;

  return { type: null, message: 'ola' };
};

module.exports = {
  registerSales,
};
