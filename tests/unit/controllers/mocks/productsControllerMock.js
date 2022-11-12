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
  type: null,
  message: {
    id: 1,
    name: "Martelo de Thor",
  },
};

const errorProductResponse = {
  type: "ID_NOT_FOUND",
  message: "Product not found",
};

const reqGetByIdProduct = {
  params: {
    id: 1,
  },
};

const errorReqGetByIdProduct = {
  params: {
    id: 100,
  },
};

const reqAddNewProduct = {
  body: {
    name: "Power rings",
  },
};

const errorReqAddNewProduct = {
  body: {
    name: "P",
  },
};

const addProductResponse = {
  type: null,
  message: {
    id: 4,
    name: reqAddNewProduct.body.name,
  },
};

const errorAddProductResponse = {
  type: "FIELD_NAME_INVALID",
  message: '"name" length must be at least 5 characters long',
};

module.exports = {
  allProductsResponse,
  productResponse,
  errorProductResponse,
  reqGetByIdProduct,
  errorReqGetByIdProduct,
  reqAddNewProduct,
  addProductResponse,
  errorReqAddNewProduct,
  errorAddProductResponse,
};
