const { expect } = require("chai");
const sinon = require("sinon");

const salesService = require("../../../src/services/salesService");
const salesMock = require("./mocks/salesServiceMock");
const salesModel = require("../../../src/models/salesModel");
const validateSales = require("../../../src/services/validations/validateSales");

describe("Check the service sales layer", function () {
  afterEach(sinon.restore);

  it("with productId invalid, registerSales function returns a error", async function () {
    sinon
      .stub(validateSales, "validateNewSales")
      .resolves(salesMock.productNotFoundError);
    const result = await salesService.registerSales(salesMock.invalidParams);
    expect(result).to.be.deep.equal(salesMock.productNotFoundError);
  });

  it("registerSales function returns the sale id and the products entered", async function () {
    sinon.stub(validateSales, "validateNewSales").resolves({ type: null });
    sinon.stub(salesModel, "insertSale").resolves(salesMock.insertId);
    sinon.stub(salesModel, "insertSaleProduct").resolves();

    const result = await salesService.registerSales(salesMock.validParams);
    expect(result).to.be.deep.equal(salesMock.responseInsertSaleProduct);
  });
});
