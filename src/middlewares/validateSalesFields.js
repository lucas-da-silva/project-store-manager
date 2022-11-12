module.exports = (req, res, next) => {
  req.body.forEach((sale) => {
    if (!sale.productId) {
      return res.status(400).json({ message: '"productId" is required' });
    }
    if (!sale.quantity) {
      return res.status(400).json({ message: '"quantity" is required' });
    }
  });
  return next();
};
