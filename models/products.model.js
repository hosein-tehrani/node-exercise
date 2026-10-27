const products = require("../data/products.json");
async function find() {
  return new Promise((res, rej) => {
    res(products);
  });
}
async function findById(id) {
  return new Promise((res, rej) => {
    res(products.find(product=> product.id === Number(id)));
  });
}
const productModel = {
  find,
  findById,
};
module.exports = productModel;
