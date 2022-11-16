const { expect } = require("chai");
const sinon = require("sinon");

const productsModel = require("../../../src/models/productsModel");
const connection = require("../../../src/models/connection");
const productsMock = require("./mocks/productsModelMock");

describe("Check the model products layer", function () {
  afterEach(sinon.restore);

  it('"findAll" function returns all products', async function () {
    sinon
      .stub(connection, "execute")
      .resolves([productsMock.allProductsResponse]);
    const result = await productsModel.findAll();
    expect(result).to.be.deep.equal(productsMock.allProductsResponse);
  });

  it('"findById" function returns the product id and information', async function () {
    sinon
      .stub(connection, "execute")
      .resolves([[productsMock.productResponse]]);
    const result = await productsModel.findById(1);
    expect(result).to.be.deep.equal(productsMock.productResponse);
  });

  it('"insert" function adds a product to the database and returns the id', async function () {
    const id = 4;
    sinon.stub(connection, "execute").resolves([{ insertId: id }]);
    const result = await productsModel.insert("Power rings");
    expect(result).to.be.deep.equal(id);
  });

  it('"update" function update a product', async function () {
    sinon.stub(connection, "execute").resolves();
    await productsModel.update(...productsMock.paramsUpdate);
    expect(connection.execute).to.have.been.calledWith(
      productsMock.queryUpdate.query,
      productsMock.queryUpdate.values
    );
  });

  it('"deleteProduct" function delete a product', async function () {
    sinon.stub(connection, "execute").resolves();
    await productsModel.deleteProduct(productsMock.paramDelete);
    expect(connection.execute).to.have.been.calledWith(
      productsMock.queryDelete.query,
      productsMock.queryDelete.values
    );
  });

  it('"getBySearch" function returns products with the search term', async function () {
    sinon.stub(connection, "execute").resolves([productsMock.searchResponse]);
    const result = await productsModel.getBySearch(productsMock.paramSearch);
    console.log(result)
    expect(result).to.be.deep.equal(productsMock.searchResponse);
  });
});
