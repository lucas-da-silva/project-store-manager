const { expect } = require("chai");
const sinon = require("sinon");

const validateProducts = require('../../../src/services/validations/validateProducts');
const productsModel = require('../../../src/models/productsModel');
const validateMock = require('./mocks/validateProductsMock');

describe("Check validations for the service products layer", function () {
  afterEach(sinon.restore);
  
  it('with ID invalid, "validateProductId" function returns error', async function () {
    sinon.stub(productsModel, "findById").resolves(undefined);
    const result = await validateProducts.validateProductId(validateMock.invalidId);
    expect(result).to.be.deep.equal(validateMock.notFoundError);
  });

  it('"validateProductId" function returns null when id is valid', async function () {
    sinon.stub(productsModel, "findById").resolves(validateMock.product);
    const result = await validateProducts.validateProductId(validateMock.validId);
    expect(result).to.be.deep.equal({ type: null });
  });
});
