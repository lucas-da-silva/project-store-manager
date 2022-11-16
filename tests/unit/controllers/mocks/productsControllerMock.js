const invalidId = 1000;
const typeSuccess = null;

const errorNameLength = {
  type: "FIELD_INVALID",
  message: '"name" length must be at least 5 characters long',
};

const errorProductResponse = {
  type: "NOT_FOUND",
  message: "Product not found",
};

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
  type: typeSuccess,
  message: {
    id: 1,
    name: "Martelo de Thor",
  },
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
  type: typeSuccess,
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
  type: typeSuccess,
  message: {
    id: updateId,
    name: updateName,
  },
};

const errorReqDelete = {
  params: {
    id: invalidId,
  },
};

const reqSearch = {
  query: {
    q: "Thor",
  },
};

const searchResponse = { message: [allProductsResponse[0]] };

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
  errorReqDelete,
  typeSuccess,
  reqSearch,
  searchResponse,
};
