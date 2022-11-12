const validateQuantitySales = (sales) => {
  if (sales.some(({ quantity }) => Number(quantity) <= 0)) { 
    return { type: 'QUANTITY_INVALID', message: '"quantity" must be greater than or equal to 1' };
  }
  return { type: null, message: '' };
};

const registerSales = async (sales) => {
  const validateQuantity = validateQuantitySales(sales);
  if (validateQuantity.type) return validateQuantity;
  return { type: null, message: 'ola' };
};

module.exports = {
  registerSales,
};