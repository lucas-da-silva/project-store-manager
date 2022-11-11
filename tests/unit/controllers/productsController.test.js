const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = require("chai");
chai.use(sinonChai);

const productsController = require("../../../src/controllers/productsController");
const productsService = require("../../../src/services/productsService");
const productsMock = require("./mocks/productsControllerMock");

const NOT_FOUND = 404;
const SUCCESS = 200;

describe("Check the controller products layer", function () {
  afterEach(sinon.restore);

  it("getAllProducts function returns status 200 and all products", async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "getAllProducts")
      .resolves({ message: productsMock.allProductsResponse });

    await productsController.getAllProducts(req, res);

    expect(res.status).to.have.been.calledWith(SUCCESS);
    expect(res.json).to.have.been.calledWith(productsMock.allProductsResponse);
  });

  it("getByIdProduct function returns status 200 and product", async function () {
    const res = {};
    const req = productsMock.reqGetByIdProduct;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "getByIdProduct")
      .resolves(productsMock.productResponse);

    await productsController.getByIdProduct(req, res);

    expect(res.status).to.have.been.calledWith(SUCCESS);
    expect(res.json).to.have.been.calledWith(
      productsMock.productResponse.message
    );
  });

  it("with invalid ID, getByIdProduct function returns status 404 and a message", async function () {
    const res = {};
    const req = productsMock.errorReqGetByIdProduct;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "getByIdProduct")
      .resolves(productsMock.errorProductResponse);

    await productsController.getByIdProduct(req, res);

    expect(res.status).to.have.been.calledWith(NOT_FOUND);
    expect(res.json).to.have.been.calledWith({
      message: productsMock.errorProductResponse.message,
    });
  });
});
