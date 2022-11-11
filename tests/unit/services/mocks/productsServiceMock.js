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
}

module.exports = {
  allProductsResponse,
  productResponse,
  errorResponse,
};
