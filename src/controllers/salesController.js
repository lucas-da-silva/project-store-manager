const salesService = require('../services/salesService');
const errorMap = require('../utils/errorMap');

const registerSales = async (req, res) => {
  const { type, message } = await salesService.registerSales(req.body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

const getAllSales = async (_req, res) => {
  const { message } = await salesService.getAllSales();
  return res.status(200).json(message);
};

const getByIdSales = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.getByIdSales(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const error = await salesService.deleteSale(id);
  if (error.type) {
    return res
      .status(errorMap.mapError(error.type))
      .json({ message: error.message }); 
  }
  return res.status(204).end();
};

module.exports = {
  registerSales,
  getAllSales,
  getByIdSales,
  deleteSale,
};
