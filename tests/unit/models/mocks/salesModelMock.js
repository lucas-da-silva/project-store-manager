const insertId = 3;

const paramsInsertSaleProduct = [2, 1, 2];

const paramsConnection = {
  query:
    "INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)",
  values: paramsInsertSaleProduct,
};

const salesProductsResponse = [
  { sale_id: 1, product_id: 1, quantity: 5 },
  { sale_id: 1, product_id: 2, quantity: 10 },
];

const allSales = [
  [
    { saleId: 1, productId: 1, quantity: 5 },
    { saleId: 1, productId: 2, quantity: 10 },
  ],
  [{ saleId: 2, productId: 3, quantity: 15 }],
]; 

const saleResponse = {
  id: 2,
  date: "2022-11-14 10:51:53",
};

module.exports = {
  insertId,
  paramsInsertSaleProduct,
  paramsConnection,
  salesProductsResponse,
  allSales,
  saleResponse,
};
