const { expect } = require("chai");
const sinon = require("sinon");

const validateSales = require("../../../src/services/validations/validateSales");
const validateMock = require("./mocks/validateSalesMock.test");
const productsModel = require("../../../src/models/productsModel");
const saleModel = require('../../../src/models/salesModel');

describe("Check validations for the service sales layer", function () {
  afterEach(sinon.restore);
  
  it("with quantity invalid, validateNewSales function return error", async function () {
    const result = await validateSales.validateNewSales(
      validateMock.quantityInvalid
    );
    expect(result).to.be.deep.equal(validateMock.quantityError);
  });

  it("with product invalid, validateNewSales function return error", async function () {
    sinon.stub(productsModel, "findById").resolves(undefined);
    const result = await validateSales.validateNewSales(
      validateMock.productInvalid
    );
    expect(result).to.be.deep.equal(validateMock.productError);
  });

  it('validateNewSales function returns null when "sales" is valid', async function () {
    sinon
      .stub(productsModel, "findById")
      .onCall(0)
      .resolves(validateMock.products[0])
      .onCall(1)
      .resolves(validateMock.products[1])
      .onCall(2)
      .resolves(validateMock.products[2]);

    const result = await validateSales.validateNewSales(
      validateMock.validSales
    );
    expect(result).to.be.deep.equal({ type: null });
  });

  it("with ID invalid, validateIdSale function return error", async function () {
    sinon.stub(saleModel, "getSaleById").resolves(undefined);
    const result = await validateSales.validateIdSale(validateMock.idInvalid);
    expect(result).to.be.deep.equal(validateMock.idError);
  });

  it("validateIdSale function return null and sale when id is valid", async function () {
    sinon.stub(saleModel, "getSaleById").resolves(validateMock.sales[0]);
    const result = await validateSales.validateIdSale(validateMock.idValid);
    expect(result).to.be.deep.equal(validateMock.saleResponse);
  });
});
