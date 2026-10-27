const products = require("../data/products.json");
const fs = require("fs")
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
async function create(product) {
  return new Promise((res, rej) => {
    products.push(product)
    fs.writeFile(process.cwd()+"/data/products.json",JSON.stringify(products),(err) => {
        err && rej(err)
        res(product)
        res();
    })
  });
}
const productModel = {
  find,
  findById,
  create,
};
module.exports = productModel;
