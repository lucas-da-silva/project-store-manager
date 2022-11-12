const allProductsResponse = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];

const productResponse = {
  id: 1,
  name: "Martelo de Thor",
};

const errorResponse = {
  type: "ID_NOT_FOUND",
  message: "Product not found",
};

const createdNewProduct = {
  id: 4,
  name: "Power rings",
};

const addNewProductResponse = {
  type: null,
  message: {
    ...createdNewProduct,
  },
};

const errorAddNewProductResponse = {
  type: "FIELD_NAME_INVALID",
  message: '"name" length must be at least 5 characters long',
};

module.exports = {
  allProductsResponse,
  productResponse,
  errorResponse,
  createdNewProduct,
  addNewProductResponse,
  errorAddNewProductResponse,
};
