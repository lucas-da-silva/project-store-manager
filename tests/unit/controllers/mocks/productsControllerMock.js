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
  type: "NOT_FOUND",
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
  type: "FIELD_INVALID",
  message: '"name" length must be at least 5 characters long',
};

const errorReqUpdate = {
  params: {
    id: 1,
  },
  body: {
    name: "P",
  },
};

const errorNameLength = {
  type: "FIELD_INVALID",
  message: '"name" length must be at least 5 characters long',
};

const updateName = "Berserk armor";
const updateId = 1;

const reqUpdate = {
  params: {
    id: updateId,
  },
  body: {
    name: updateName,
  },
};

const updateResponse = {
  type: null,
  message: {
    id: updateId,
    name: updateName,
  },
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
  errorReqUpdate,
  errorNameLength,
  reqUpdate,
  updateResponse,
};
