const { expect } = require("chai");
const sinon = require("sinon");

const productService = require("../../../src/services/productsService");
const productMock = require("./mocks/productsServiceMock");
const productModel = require("../../../src/models/productsModel");

describe("Check the service products layer", function () {
  afterEach(sinon.restore);
  
  it("getAllProducts function returns all products", async function () {
    sinon
      .stub(productModel, "findAll")
      .resolves(productMock.allProductsResponse);
    const result = await productService.getAllProducts();
    expect(result).to.be.deep.equal({
      message: productMock.allProductsResponse,
    });
  });

  it("with a valid ID, the getByIdProduct function returns the product", async function () {
    sinon.stub(productModel, "findById").resolves(productMock.productResponse);
    const result = await productService.getByIdProduct(1);
    expect(result).to.be.deep.equal({
      type: null, message: productMock.productResponse,
    });
  });

  it("with an invalid ID, the getByIdProduct function returns an error", async function () {
    sinon.stub(productModel, "findById").resolves(undefined);
    const result = await productService.getByIdProduct(100);
    expect(result).to.be.deep.equal(productMock.errorResponse);
  });

  it("with an valid name, the addNewProduct function returns an product", async function () {
    sinon.stub(productModel, "insert").resolves(productMock.createdNewProduct.id);
    sinon.stub(productModel, "findById").resolves(productMock.createdNewProduct);
    const result = await productService.addNewProduct('Power rings');
    expect(result).to.be.deep.equal(productMock.addNewProductResponse);
  });

  it("with an invalid name, the addNewProduct function returns error", async function () {
    const result = await productService.addNewProduct('P');
    expect(result).to.be.deep.equal(productMock.errorAddNewProductResponse);
  });
});
