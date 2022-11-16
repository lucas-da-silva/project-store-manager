const validId = 1;
const invalidId = 1000;

const product = {
  id: 1,
  name: "Martelo de Thor",
};

const notFoundError = { type: "NOT_FOUND", message: "Product not found" };

module.exports = {
  validId,
  invalidId,
  notFoundError,
  product,
};
