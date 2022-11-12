const salesService = require('../services/salesService');

const registerSales = async (req, res) => {
  const { type, message } = await salesService.registerSales(req.body);
  if (type) return res.status(404).json({ message });
  res.status(201).json(message);
};

module.exports = {
  registerSales,
};