const { expect } = require("chai");
const sinon = require("sinon");

const validateProductsFields = require("../../../src/middlewares/validateProductsFields");

describe("Check validateProductsFields middleware ", function () {
  it("without the name key, return error", async function () {
    const res = {};
    const req = { body: {} };
    const next = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await validateProductsFields(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({
      message: '"name" is required',
    });
  });

  it("with the name key included, next is called", async function () {
    const res = {};
    const req = {
      body: {
        name: "name",
      },
    };
    const next = sinon.stub().returns();

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await validateProductsFields(req, res, next);
    
    expect(next).to.have.been.called;
  });
});