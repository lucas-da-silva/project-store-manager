const validId = 1;
const invalidId = 1000;
const typeSuccess = null;

const quantityError = {
  type: "FIELD_INVALID",
  message: '"quantity" must be greater than or equal to 1',
};
const idNotFoundError = {
  type: "NOT_FOUND",
  message: "Sale not found",
};

const invalidReq = {
  body: [
    {
      productId: 1,
      quantity: 0,
    },
  ],
};

const validReq = {
  body: [
    {
      productId: 2,
      quantity: 10,
    },
    {
      productId: 1,
      quantity: 20,
    },
  ],
};

const responseRegisterSales = {
  type: typeSuccess,
  message: {
    id: 3,
    itemsSold: validReq.body,
  },
};

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

const errorReqDelete = {
  params: {
    id: invalidId,
  },
};

const validSalesUpdate = [
  {
    productId: 2,
    quantity: 24,
  },
  {
    productId: 1,
    quantity: 45,
  },
];

const invalidSalesUpdate = [
  {
    productId: 100,
    quantity: 24,
  },
  {
    productId: 1,
    quantity: 45,
  },
];

const invalidReqUpdate = {
  params: {
    id: invalidId,
  },
  body: invalidSalesUpdate,
};

const validReqUpdate = {
  params: {
    id: validId,
  },
  body: validSalesUpdate,
};

const updateResponse = {
  type: null,
  message: {
    saleId: validId,
    itemsUpdated: validSalesUpdate,
  },
};

module.exports = {
  invalidReq,
  quantityError,
  validReq,
  responseRegisterSales,
  getAllSalesResponse,
  idNotFoundError,
  getByIdSalesResponse,
  errorReqDelete,
  typeSuccess,
  validSalesUpdate,
  invalidSalesUpdate,
  validId,
  invalidReqUpdate,
  validReqUpdate,
  updateResponse,
};
