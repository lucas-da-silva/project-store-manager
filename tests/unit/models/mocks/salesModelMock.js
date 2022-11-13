const insertId = 3;

const paramsInsertSaleProduct = [2, 1, 2];

const paramsConnection = {
  query: "INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)",
  values: paramsInsertSaleProduct,
}

module.exports = {
  insertId,
  paramsInsertSaleProduct,
  paramsConnection,
};