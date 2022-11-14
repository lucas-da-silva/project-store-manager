const camelize = require('camelize');
const connection = require('./connection');

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales () VALUE ();',
  );
  return insertId;
};

const insertSaleProduct = async (saleId, productId, quantity) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, productId, quantity],
  );
};

const getAllSales = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales;',
  );
  return result;
};

const getSalesProducts = async (saleId) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.sales_products WHERE sale_id = ?',
    [saleId],
  );
  return camelize(result);
};

const getSaleById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?', [id],
  );
  return result;
};

const deleteSale = async (id) => {
  await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?', [id],
  );
};

module.exports = {
  insertSale,
  insertSaleProduct,
  getAllSales,
  getSalesProducts,
  getSaleById,
  deleteSale,
};
