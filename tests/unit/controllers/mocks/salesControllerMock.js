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
  type: "QUANTITY_INVALID",
  message: '"quantity" must be greater than or equal to 1',
};

const responseRegisterSales = {
  type: null,
  message: {
    id: 3,
    itemsSold: validReq.body,
  },
};

module.exports = {
  invalidReq,
  quantityError,
  validReq,
  responseRegisterSales,
};
