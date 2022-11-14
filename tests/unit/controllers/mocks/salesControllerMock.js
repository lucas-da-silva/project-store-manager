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

const quantityError = {
  type: "FIELD_INVALID",
  message: '"quantity" must be greater than or equal to 1',
};

const responseRegisterSales = {
  type: null,
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

const idNotFoundError = {
  type: "NOT_FOUND",
  message: "Sale not found",
};

const getByIdSalesResponse = {
  type: null,
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

module.exports = {
  invalidReq,
  quantityError,
  validReq,
  responseRegisterSales,
  getAllSalesResponse,
  idNotFoundError,
  getByIdSalesResponse,
};
