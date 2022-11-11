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

module.exports = {
  allProductsResponse,
  productResponse,
  errorProductResponse,
  reqGetByIdProduct,
  errorReqGetByIdProduct,
};
