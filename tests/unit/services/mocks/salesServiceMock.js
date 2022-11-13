const insertId = 3;

const productNotFoundError = {
  type: "PRODUCT_NOT_FOUND",
  message: "Product not found",
};

const invalidParams = [
  {
    productId: 100,
    quantity: 5,
  },
];

const validParams = [
  {
    productId: 2,
    quantity: 20,
  },
  {
    productId: 2,
    quantity: 10,
  },
  {
    productId: 1,
    quantity: 15,
  }
];

const responseInsertSaleProduct = {
  type: null,
  message: {
    id: insertId,
    itemsSold: validParams,
  },
};

module.exports = {
  productNotFoundError,
  invalidParams,
  insertId,
  validParams,
  responseInsertSaleProduct,
};
