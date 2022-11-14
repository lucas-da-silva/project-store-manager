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
const INVALID_ID = 100;

describe("Check the controller products layer", function () {
  afterEach(sinon.restore);

  it("with quatity invalid, registerSales function return error", async function () {
    const res = {};
    const req = salesMock.invalidReq;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, "registerSales").resolves(salesMock.quantityError);

    await salesController.registerSales(req, res);

    expect(res.status).to.have.been.calledWith(
      errorMap.errorMap.QUANTITY_INVALID
    );
    expect(res.json).to.have.been.calledWith({
      message: salesMock.quantityError.message,
    });
  });

  it("registerSales function returns status 201 id and the registered products", async function () {
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

  it("getAllSales function returns status 200 and all sales", async function () {
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

  it("with invalid ID, getByIdSales function return error", async function () {
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

  it("getByIdSales function returns status 200 and sales of the informed id", async function () {
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
});
