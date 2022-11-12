const errorMap = {
  QUANTITY_INVALID: 422,
  PRODUCT_NOT_FOUND: 404,
  BAD_REQUEST: 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
