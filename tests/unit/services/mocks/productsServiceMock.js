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
  type: "NOT_FOUND",
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
  type: "FIELD_INVALID",
  message: '"name" length must be at least 5 characters long',
};

const validName = 'Berserk armor';
const validId = 1;
const invalidName = 'P';
const invalidId = 100; 

const errorLengthName = {
  type: "FIELD_INVALID",
  message: '"name" length must be at least 5 characters long',
};

const idNotFound = { type: "NOT_FOUND", message: "Product not found" };

const updateProductResponse = {
  type: null,
  message: {
    id: validId,
    name: validName
  }
}

module.exports = {
  allProductsResponse,
  productResponse,
  errorResponse,
  createdNewProduct,
  addNewProductResponse,
  errorAddNewProductResponse,
  invalidName,
  validName,
  validId,
  invalidId,
  errorLengthName,
  idNotFound,
  updateProductResponse,
};
