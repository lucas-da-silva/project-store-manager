const { expect } = require("chai");
const sinon = require("sinon");

const productService = require("../../../src/services/productsService");
const productMock = require("./mocks/productsServiceMock");
const productModel = require("../../../src/models/productsModel");
const validateProducts = require('../../../src/services/validations/validateProducts')

describe("Check the service products layer", function () {
  afterEach(sinon.restore);

  it('"getAllProducts" function returns all products', async function () {
    sinon
      .stub(productModel, "findAll")
      .resolves(productMock.allProductsResponse);
    const result = await productService.getAllProducts();
    expect(result).to.be.deep.equal({
      message: productMock.allProductsResponse,
    });
  });

  it('with a valid ID, the "getByIdProduct" function returns the product', async function () {
    sinon.stub(productModel, "findById").resolves(productMock.productResponse);
    const result = await productService.getByIdProduct(productMock.validId);
    expect(result).to.be.deep.equal({
      type: null,
      message: productMock.productResponse,
    });
  });

  it('with an invalid ID, the "getByIdProduct" function returns an error', async function () {
    sinon.stub(productModel, "findById").resolves(undefined);
    const result = await productService.getByIdProduct(productMock.invalidId);
    expect(result).to.be.deep.equal(productMock.idNotFound);
  });

  it('with an valid name, the "addNewProduct" function returns an product', async function () {
    sinon
      .stub(productModel, "insert")
      .resolves(productMock.createdNewProduct.id);
    sinon
      .stub(productModel, "findById")
      .resolves(productMock.createdNewProduct);
    const result = await productService.addNewProduct(productMock.validName);
    expect(result).to.be.deep.equal(productMock.addNewProductResponse);
  });

  it('with an invalid name, the "addNewProduct" function returns error', async function () {
    const result = await productService.addNewProduct(productMock.invalidName);
    expect(result).to.be.deep.equal(productMock.errorAddNewProductResponse);
  });

  it('with an invalid name, the "updateProduct" function returns error', async function () {
    const result = await productService.updateProduct(productMock.validId, productMock.invalidName);
    expect(result).to.be.deep.equal(productMock.errorLengthName);
  });

  it('with an invalid ID, the "updateProduct" function returns error', async function () {
    sinon.stub(validateProducts, 'validateProductId').resolves(productMock.idNotFound)
    const result = await productService.updateProduct(productMock.invalidId, productMock.validName);
    expect(result).to.be.deep.equal(productMock.idNotFound);
  });

  it('the "updateProduct" function update a product', async function () {
    sinon
      .stub(validateProducts, "validateProductId")
      .resolves(productMock.typeSucess);
    sinon.stub(productModel, 'update').resolves();

    const result = await productService.updateProduct(productMock.validId, productMock.validName);
    expect(result).to.be.deep.equal(productMock.updateProductResponse);
  });

  it('with an invalid ID, "deleteProduct" function returns error', async function () {
    sinon
      .stub(validateProducts, "validateProductId")
      .resolves(productMock.idNotFound);
    
    const result = await productService.deleteProduct(productMock.invalidId);
    expect(result).to.be.deep.equal(productMock.idNotFound);
  });
  
  it('"deleteProduct" function delete a product based on its id', async function () {
    sinon
      .stub(validateProducts, "validateProductId")
      .resolves(productMock.typeSucess);
    sinon.stub(productModel, 'deleteProduct').resolves();
    
    const result = await productService.deleteProduct(productMock.validId);
    expect(result).to.be.deep.equal(productMock.typeSucess);
  });
});
