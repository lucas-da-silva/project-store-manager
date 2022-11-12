module.exports = (req, res, next) => {
  const productIdField = req.body.some((sale) => !sale.productId);
  const quantityField = req.body.some(
    (sale) => !sale.quantity && sale.quantity !== 0,
  );

  if (productIdField) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  if (quantityField) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  return next();
};
