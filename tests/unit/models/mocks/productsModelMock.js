const allProductsResponse = [
  {
    id: 1,
    name: "Martelo de Thor",
  },
  {
    id: 2,
    name: "Traje de encolhimento",
  },
  {
    id: 3,
    name: "Escudo do Capitão América",
  },
];

const productResponse = {
  id: 1,
  name: "Martelo de Thor",
};

const paramsUpdate = [1, "Mjolnir"];

const queryUpdate = {
  query: "UPDATE StoreManager.products SET name = ? WHERE id = ?",
  values: [paramsUpdate[1], paramsUpdate[0]],
};

const paramDelete = 1;
const queryDelete = {
  query: "DELETE FROM StoreManager.products WHERE id = ?",
  values: [paramDelete],
};

const paramSearch = 'Escudo';
const searchResponse = [ { id: 3, name: 'Escudo do Capitão América' } ]

module.exports = {
  allProductsResponse,
  productResponse,
  paramsUpdate,
  queryUpdate,
  paramDelete,
  queryDelete,
  paramSearch,
  searchResponse,
};
