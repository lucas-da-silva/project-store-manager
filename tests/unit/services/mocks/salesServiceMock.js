const insertId = 3;
const typeSuccess = null;
const saleId = 1;
const invalidId = 1000;

const productNotFoundError = {
  type: "NOT_FOUND",
  message: "Product not found",
};
const invalidIdError = {
  type: "NOT_FOUND",
  message: "Sale not found",
};

const allSales = [
  { id: 1, date: "2022-11-14T10:51:53.000Z" },
  { id: 2, date: "2022-11-14T10:51:53.000Z" },
];

const allSalesProducts = [
  { saleId: 1, productId: 1, quantity: 5 },
  { saleId: 1, productId: 2, quantity: 10 },
  { saleId: 2, productId: 3, quantity: 15 },
];

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
  },
];

const responseInsertSaleProduct = {
  type: typeSuccess,
  message: {
    id: insertId,
    itemsSold: validParams,
  },
};

const salesProducts = [
  [
    { saleId: 1, productId: 1, quantity: 5 },
    { saleId: 1, productId: 2, quantity: 10 },
  ],
  [{ saleId: 2, productId: 3, quantity: 15 }],
];

const getAllSalesResponse = {
  message: [
    {
      saleId: 1,
      productId: 1,
      quantity: 5,
      date: "2022-11-14T10:51:53.000Z",
    },
    {
      saleId: 1,
      productId: 2,
      quantity: 10,
      date: "2022-11-14T10:51:53.000Z",
    },
    {
      saleId: 2,
      productId: 3,
      quantity: 15,
      date: "2022-11-14T10:51:53.000Z",
    },
  ],
};

const validateIdSaleResponse = {
  type: typeSuccess,
  message: allSales[0],
};

const getSalesProductsResponse = [
  { saleId: 1, productId: 1, quantity: 5 },
  { saleId: 1, productId: 2, quantity: 10 },
];

const getByIdSalesResponse = {
  type: typeSuccess,
  message: [
    {
      date: "2022-11-14T10:51:53.000Z",
      productId: 1,
      quantity: 5,
    },
    {
      date: "2022-11-14T10:51:53.000Z",
      productId: 2,
      quantity: 10,
    },
  ],
};

const invalidSalesUpdate = [
  {
    productId: 500,
    quantity: 100,
  },
];

const validSalesUpdate = [
  {
    productId: 2,
    quantity: 20,
  },
  {
    productId: 1,
    quantity: 50,
  },
];

const updateResponse = {
  type: null,
  message: { saleId, itemsUpdated: validSalesUpdate },
};

module.exports = {
  productNotFoundError,
  invalidParams,
  insertId,
  validParams,
  responseInsertSaleProduct,
  allSales,
  salesProducts,
  getAllSalesResponse,
  invalidIdError,
  saleId,
  validateIdSaleResponse,
  getSalesProductsResponse,
  getByIdSalesResponse,
  invalidId,
  typeSuccess,
  invalidSalesUpdate,
  validSalesUpdate,
  updateResponse,
};
