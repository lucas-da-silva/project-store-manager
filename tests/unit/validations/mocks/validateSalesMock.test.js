const quantityInvalid = [
  {
    productId: 2,
    quantity: 1,
  },
  {
    productId: 1,
    quantity: 0,
  },
];
const quantityError = {
  type: "QUANTITY_INVALID",
  message: '"quantity" must be greater than or equal to 1',
};

const productInvalid = [
  {
    productId: 100,
    quantity: 20,
  },
];
const productError = { type: "NOT_FOUND", message: "Product not found" };

const validSales = [
  {
    productId: 1,
    quantity: 10,
  },
  {
    productId: 2,
    quantity: 15,
  },
  {
    productId: 3,
    quantity: 20,
  },
];

const products = [
  { id: 1, name: "Martelo de Thor" },
  { id: 2, name: "Traje de encolhimento" },
  { id: 3, name: "Escudo do Capitão América" },
];

const idInvalid = 100;
const idError = {
  type: "NOT_FOUND",
  message: "Sale not found",
};

const idValid = 1;
const sales = [
  { id: 1, date: "2022-11-14T10:51:53.000Z" },
  { id: 2, date: "2022-11-14T10:51:53.000Z" },
];
const saleResponse = { type: null, message: sales[0] };

module.exports = {
  quantityInvalid,
  quantityError,
  productInvalid,
  productError,
  validSales,
  products,
  idInvalid,
  idError,
  sales,
  idValid,
  saleResponse,
};
