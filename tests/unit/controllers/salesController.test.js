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

  it("registerSales function returns id and the registered products", async function () {
    const res = {};
    const req = salesMock.validReq;

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, "registerSales")
      .resolves(salesMock.responseRegisterSales);

    await salesController.registerSales(req, res);

    expect(res.status).to.have.been.calledWith(CREATED);
    expect(res.json).to.have.been.calledWith(salesMock.responseRegisterSales.message);
  });
});
