const productsService = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const { message } = await productsService.getAllProducts(); 
  return res.status(200).json(message);
};  

const getByIdProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.getByIdProduct(id);
  if (type) return res.status(404).json({ message });
  return res.status(200).json(message);
};

const addNewProduct = async (req, res) => {
  const { name } = req.body;
  const product = await productsService.addNewProduct(name);
  return res.status(201).json(product.message);
};

module.exports = {
  getAllProducts,
  getByIdProduct,
  addNewProduct,
};
