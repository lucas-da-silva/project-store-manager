const errorMap = {
  FIELD_INVALID: 422,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = {
  errorMap,
  mapError,
};
