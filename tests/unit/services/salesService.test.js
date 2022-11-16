const { expect } = require("chai");
const sinon = require("sinon");

const salesService = require("../../../src/services/salesService");
const salesMock = require("./mocks/salesServiceMock");
const salesModel = require("../../../src/models/salesModel");
const validateSales = require("../../../src/services/validations/validateSales");

const INVALID_ID = 100;

describe("Check the service sales layer", function () {
  afterEach(sinon.restore);

  it('with productId invalid, "registerSales" function return error', async function () {
    sinon
      .stub(validateSales, "validateSales")
      .resolves(salesMock.productNotFoundError);
    const result = await salesService.registerSales(salesMock.invalidParams);
    expect(result).to.be.deep.equal(salesMock.productNotFoundError);
  });

  it('"registerSales" function returns the sale id and the products entered', async function () {
    sinon.stub(validateSales, "validateSales").resolves({ type: null });
    sinon.stub(salesModel, "insertSale").resolves(salesMock.insertId);
    sinon.stub(salesModel, "insertSaleProduct").resolves();

    const result = await salesService.registerSales(salesMock.validParams);
    expect(result).to.be.deep.equal(salesMock.responseInsertSaleProduct);
  });

  it('"getAllSales" function returns all sales', async function () {
    sinon.stub(salesModel, "getAllSales").resolves(salesMock.allSales);
    sinon
      .stub(salesModel, "getSalesProducts")
      .onCall(0)
      .resolves(salesMock.salesProducts[0])
      .onCall(1)
      .resolves(salesMock.salesProducts[1]);

    const result = await salesService.getAllSales();
    expect(result).to.be.deep.equal(salesMock.getAllSalesResponse);
  });

  it('with ID invalid, "getByIdSales" function return error', async function () {
    sinon
      .stub(validateSales, "validateIdSale")
      .resolves(salesMock.invalidIdError);
    const result = await salesService.getByIdSales(INVALID_ID);
    expect(result).to.be.deep.equal(salesMock.invalidIdError);
  });

  it('"getByIdSales" function returns to sales of the informed id', async function () {
    sinon
      .stub(validateSales, "validateIdSale")
      .resolves(salesMock.validateIdSaleResponse);
    sinon
      .stub(salesModel, "getSalesProducts")
      .resolves(salesMock.getSalesProductsResponse);

    const result = await salesService.getByIdSales(salesMock.saleId);
    expect(result).to.be.deep.equal(salesMock.getByIdSalesResponse);
  });

  it('with an id of a non-existent sale, "deleteSale" function returns error', async function () {
    sinon
      .stub(validateSales, "validateIdSale")
      .resolves(salesMock.invalidIdError);
    const result = await salesService.deleteSale(salesMock.invalidId);
    expect(result).to.be.deep.equal(salesMock.invalidIdError);
  });

  it('"deleteSale" function delete a sale', async function () {
    sinon
      .stub(validateSales, "validateIdSale")
      .resolves(salesMock.validateIdSaleResponse);
    sinon.stub(salesModel, "deleteSale").resolves();

    const result = await salesService.deleteSale(salesMock.saleId);
    expect(result).to.be.deep.equal({ type: salesMock.typeSuccess });
  });

  it('with an id of a non-existent sale, "updateSale" function retuns error', async function () {
    sinon
      .stub(validateSales, "validateIdSale")
      .resolves(salesMock.invalidIdError);
    const result = await salesService.updateSale(
      salesMock.invalidId,
      salesMock.validSalesUpdate
    );
    expect(result).to.be.deep.equal(salesMock.invalidIdError);
  });

  it('with sales invalid, "updateSale" function returns error', async function () {
    sinon
      .stub(validateSales, "validateIdSale")
      .resolves(salesMock.validateIdSaleResponse);
    sinon
      .stub(validateSales, "validateSales")
      .resolves(salesMock.productNotFoundError);

    const result = await salesService.updateSale(
      salesMock.saleId,
      salesMock.invalidSalesUpdate
    );
    expect(result).to.be.deep.equal(salesMock.productNotFoundError);
  });

  it('"updateSale" function update multiple sales', async function () {
    sinon
      .stub(validateSales, "validateIdSale")
      .resolves(salesMock.validateIdSaleResponse);
    sinon
      .stub(validateSales, "validateSales")
      .resolves({ type: salesMock.typeSuccess });
    sinon
      .stub(salesModel, "getSalesProducts")
      .resolves(salesMock.getSalesProductsResponse);
    sinon.stub(salesModel, "updateSale").resolves();

    const result = await salesService.updateSale(
      salesMock.saleId,
      salesMock.validSalesUpdate
    );
    expect(result).to.be.deep.equal(salesMock.updateResponse);
  });
});
