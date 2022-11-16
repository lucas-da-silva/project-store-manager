const { expect } = require("chai");
const sinon = require("sinon");
const camelize = require("camelize");

const salesModel = require("../../../src/models/salesModel");
const connection = require("../../../src/models/connection");
const salesMock = require("./mocks/salesModelMock");

describe("Check the model sales layer", function () {
  afterEach(sinon.restore);

  it('"insertSale" function inserts a sale into the database and returns the id of the entered sale', async function () {
    sinon
      .stub(connection, "execute")
      .resolves([{ insertId: salesMock.insertId }]);
    const result = await salesModel.insertSale();
    expect(result).to.be.deep.equal(salesMock.insertId);
  });

  it('"insertSaleProduct" function insert data into sales_product table', async function () {
    sinon.stub(connection, "execute").resolves();
    await salesModel.insertSaleProduct(...salesMock.paramsInsertSaleProduct);
    expect(connection.execute).to.have.been.calledWith(
      salesMock.paramsConnection.query,
      salesMock.paramsConnection.values
    );
  });

  it('"getAllSales" function returns all sales', async function () {
    sinon.stub(connection, "execute").resolves([salesMock.allSales]);
    const result = await salesModel.getAllSales();
    expect(result).to.be.deep.equal(salesMock.allSales);
  });

  it('"getSalesProducts" function returns the sales of products', async function () {
    sinon
      .stub(connection, "execute")
      .resolves([salesMock.salesProductsResponse]);
    const result = await salesModel.getSalesProducts(1);
    expect(result).to.be.deep.equal(camelize(salesMock.salesProductsResponse));
  });

  it('"getSaleById" function return sale', async function () {
    sinon.stub(connection, "execute").resolves([[salesMock.saleResponse]]);
    const result = await salesModel.getSaleById(2);
    expect(result).to.be.deep.equal(salesMock.saleResponse);
  });

  it('"deleteSale" function delete a sale', async function () {
    sinon.stub(connection, "execute").resolves();
    await salesModel.deleteSale(salesMock.paramDelete);
    expect(connection.execute).to.have.been.calledWith(
      salesMock.deleteConnectionParams.query,
      salesMock.deleteConnectionParams.values
    );
  });

  it('"updateSale" function update a sale', async function () {
    const { id, sale, oldSale } = salesMock.paramsUpdate;
    sinon.stub(connection, "execute").resolves();

    await salesModel.updateSale(id, sale, oldSale);
    expect(connection.execute).to.have.been.calledWith(
      salesMock.updateConnectionParams.query,
      salesMock.updateConnectionParams.values
    );
  });
});
