const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = require("chai");
chai.use(sinonChai);

const productsController = require("../../../src/controllers/productsController");
const productsService = require("../../../src/services/productsService");
const productsMock = require("./mocks/productsControllerMock");
const errorMap = require("../../../src/utils/errorMap");

const SUCCESS = 200;
const CREATED = 201;

describe("Check the controller products layer", function () {
  afterEach(sinon.restore);

  it('"getAllProducts" function returns status 200 and all products', async function () {
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

  it('"getByIdProduct" function returns status 200 and product', async function () {
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

  it('with invalid ID, "getByIdProduct" function returns status 404 and a message', async function () {
    const res = {};
    const req = productsMock.errorReqGetByIdProduct;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "getByIdProduct")
      .resolves(productsMock.errorProductResponse);

    await productsController.getByIdProduct(req, res);

    expect(res.status).to.have.been.calledWith(errorMap.errorMap.NOT_FOUND);
    expect(res.json).to.have.been.calledWith({
      message: productsMock.errorProductResponse.message,
    });
  });

  it('with valid name, "addNewProduct" function add the product and return it', async function () {
    const res = {};
    const req = productsMock.reqAddNewProduct;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "addNewProduct")
      .resolves(productsMock.addProductResponse);

    await productsController.addNewProduct(req, res);

    expect(res.status).to.have.been.calledWith(CREATED);
    expect(res.json).to.have.been.calledWith(
      productsMock.addProductResponse.message
    );
  });

  it('with invalid name, "addNewProduct" function return error', async function () {
    const res = {};
    const req = productsMock.errorReqAddNewProduct;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "addNewProduct")
      .resolves(productsMock.errorAddProductResponse);

    await productsController.addNewProduct(req, res);

    expect(res.status).to.have.been.calledWith(errorMap.errorMap.FIELD_INVALID);
    expect(res.json).to.have.been.calledWith({
      message: productsMock.errorAddProductResponse.message,
    });
  });

  it('with invalid name, "updateProduct" function return error', async function () {
    const res = {};
    const req = productsMock.errorReqUpdate;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "updateProduct")
      .resolves(productsMock.errorNameLength);

    await productsController.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(errorMap.errorMap.FIELD_INVALID);
    expect(res.json).to.have.been.calledWith({
      message: productsMock.errorNameLength.message,
    });
  });

  it('"updateProduct" function update a product', async function () {
    const res = {};
    const req = productsMock.reqUpdate;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsService, "updateProduct")
      .resolves(productsMock.updateResponse);

    await productsController.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(SUCCESS);
    expect(res.json).to.have.been.calledWith(
      productsMock.updateResponse.message
    );
  });
});
