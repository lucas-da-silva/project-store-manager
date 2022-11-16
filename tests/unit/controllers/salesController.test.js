const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = require("chai");
chai.use(sinonChai);

const salesController = require("../../../src/controllers/salesController");
const salesService = require("../../../src/services/salesService");
const salesMock = require("./mocks/salesControllerMock");
const errorMap = require("../../../src/utils/errorMap");

const CREATED = 201;
const SUCCESS = 200;
const NO_CONTENT = 204;
const INVALID_ID = 100;

describe("Check the controller products layer", function () {
  afterEach(sinon.restore);

  it('with quatity invalid, "registerSales" function return error', async function () {
    const res = {};
    const req = salesMock.invalidReq;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, "registerSales").resolves(salesMock.quantityError);

    await salesController.registerSales(req, res);

    expect(res.status).to.have.been.calledWith(errorMap.errorMap.FIELD_INVALID);
    expect(res.json).to.have.been.calledWith({
      message: salesMock.quantityError.message,
    });
  });

  it('"registerSales" function returns status 201 id and the registered products', async function () {
    const res = {};
    const req = salesMock.validReq;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, "registerSales")
      .resolves(salesMock.responseRegisterSales);

    await salesController.registerSales(req, res);

    expect(res.status).to.have.been.calledWith(CREATED);
    expect(res.json).to.have.been.calledWith(
      salesMock.responseRegisterSales.message
    );
  });

  it('"getAllSales" function returns status 200 and all sales', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, "getAllSales")
      .resolves(salesMock.getAllSalesResponse);

    await salesController.getAllSales(req, res);

    expect(res.status).to.have.been.calledWith(SUCCESS);
    expect(res.json).to.have.been.calledWith(
      salesMock.getAllSalesResponse.message
    );
  });

  it('with invalid ID, "getByIdSales" function return error', async function () {
    const res = {};
    const req = {
      params: { id: INVALID_ID },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, "getByIdSales")
      .resolves(salesMock.idNotFoundError);

    await salesController.getByIdSales(req, res);

    expect(res.status).to.have.been.calledWith(errorMap.errorMap.NOT_FOUND);
    expect(res.json).to.have.been.calledWith({
      message: salesMock.idNotFoundError.message,
    });
  });

  it('"getByIdSales" function returns status 200 and sales of the informed id', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, "getByIdSales")
      .resolves(salesMock.getByIdSalesResponse);

    await salesController.getByIdSales(req, res);

    expect(res.status).to.have.been.calledWith(SUCCESS);
    expect(res.json).to.have.been.calledWith(
      salesMock.getByIdSalesResponse.message
    );
  });

  it('with a non-existent id, "deleteSale" function returns error', async function () {
    const res = {};
    const req = salesMock.errorReqDelete;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, "deleteSale").resolves(salesMock.idNotFoundError);

    await salesController.deleteSale(req, res);

    expect(res.status).to.have.been.calledWith(errorMap.errorMap.NOT_FOUND);
    expect(res.json).to.have.been.calledWith({
      message: salesMock.idNotFoundError.message,
    });
  });

  it('"deleteSale" function delete a sale', async function () {
    const res = {};
    const req = salesMock.errorReqDelete;

    res.status = sinon.stub().returns(res);
    res.end = sinon.stub().returns();
    sinon
      .stub(salesService, "deleteSale")
      .resolves({ type: salesMock.typeSuccess });

    await salesController.deleteSale(req, res);

    expect(res.status).to.have.been.calledWith(NO_CONTENT);
    expect(res.end).to.have.been.called;
  });

  it('with ID invalid, "updateSale" function return error', async function () {
    const res = {};
    const req = salesMock.invalidReqUpdate;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, "updateSale").resolves(salesMock.idNotFoundError);

    await salesController.updateSale(req, res);

    expect(res.status).to.have.been.calledWith(errorMap.errorMap.NOT_FOUND);
    expect(res.json).to.have.been.calledWith({
      message: salesMock.idNotFoundError.message,
    });
  });

  it('"updateSale" function update multiple sale', async function () {
    const res = {};
    const req = salesMock.validReqUpdate;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, "updateSale").resolves(salesMock.updateResponse);

    await salesController.updateSale(req, res);

    expect(res.status).to.have.been.calledWith(SUCCESS);
    expect(res.json).to.have.been.calledWith(salesMock.updateResponse.message);
  });
});
