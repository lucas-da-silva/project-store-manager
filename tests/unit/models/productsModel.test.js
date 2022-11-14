const { expect } = require("chai");
const sinon = require("sinon");

const productsModel = require("../../../src/models/productsModel");
const connection = require("../../../src/models/connection");
const productsMock = require("./mocks/productsModelMock");

describe("Check the model products layer", function () {
  afterEach(sinon.restore);

  it("function 'findAll' returns all products", async function () {
    sinon
      .stub(connection, "execute")
      .resolves([productsMock.allProductsResponse]);
    const result = await productsModel.findAll();
    expect(result).to.be.deep.equal(productsMock.allProductsResponse);
  });

  it("function 'findById' returns the product id and information", async function () {
    sinon
      .stub(connection, "execute")
      .resolves([[productsMock.productResponse]]);
    const result = await productsModel.findById(1);
    expect(result).to.be.deep.equal(productsMock.productResponse);
  });

  it("function 'insert' adds a product to the database and returns the id", async function () {
    const id = 4;
    sinon.stub(connection, "execute").resolves([{ insertId: id }]);
    const result = await productsModel.insert("Power rings");
    expect(result).to.be.deep.equal(id);
  });

  it("function 'update' update a product", async function () {
    sinon.stub(connection, "execute").resolves();
    await productsModel.update(...productsMock.paramsUpdate);
    expect(connection.execute).to.have.been.calledWith(
      productsMock.queryUpdate.query,
      productsMock.queryUpdate.values
    );
  });
});
