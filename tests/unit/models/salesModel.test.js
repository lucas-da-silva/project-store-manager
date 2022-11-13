const { expect } = require("chai");
const sinon = require("sinon");

const salesModel = require("../../../src/models/salesModel");
const connection = require("../../../src/models/connection");
const salesMock = require("./mocks/salesModelMock");

describe("Check the model sales layer", function () {
  afterEach(sinon.restore);

  it("function insertSale inserts a sale into the database and returns the id of the entered sale", async function () {
    sinon
      .stub(connection, "execute")
      .resolves([{ insertId: salesMock.insertId }]);
    const result = await salesModel.insertSale();
    expect(result).to.be.deep.equal(salesMock.insertId);
  });

  it("function insertSaleProduct insert data into sales_product table", async function () {
    sinon.stub(connection, "execute").resolves();
    await salesModel.insertSaleProduct(...salesMock.paramsInsertSaleProduct);
    expect(connection.execute).to.have.been.calledWith(
      salesMock.paramsConnection.query,
      salesMock.paramsConnection.values
    );
  });
});
