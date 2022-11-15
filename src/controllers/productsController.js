const productsService = require('../services/productsService');
const errorMap = require('../utils/errorMap');

const getAllProducts = async (_req, res) => {
  const { message } = await productsService.getAllProducts();
  return res.status(200).json(message);
};

const getByIdProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getByIdProduct(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const addNewProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.addNewProduct(name);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(message);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await productsService.updateProduct(id, name);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const error = await productsService.deleteProduct(id);
  if (error.type) {
    return res
      .status(errorMap.mapError(error.type))
      .json({ message: error.message });
  }
  return res.status(204).end();
};

const getBySearchProduct = async (req, res) => {
  const { q } = req.query;
  const { message } = await productsService.getBySearchProduct(q);
  return res.status(200).json(message);
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
  getBySearchProduct,
};
