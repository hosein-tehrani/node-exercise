const fs = require("fs/promises");
const products = require("../data/products.json");
const fileAddress = process.cwd() + "/data/products.json";
const writeFile = async () => {
  await fs.writeFile(fileAddress, JSON.stringify(products));
};

async function getAll() {
  return new Promise((res, rej) => {
    res(products);
  });
}
async function findById(id) {
  return new Promise((res, rej) => {
    res(products.find((product) => product.id === Number(id)));
  });
}
async function create(product) {
  products.push(product);
  await writeFile();

  return product;
}
async function update(id, product) {
    const index = products.findIndex((prod) => prod.id === Number(id));

    if (index === -1) return null;

    products[index] = {
      ...products[index],
      ...product,
      id: products[index].id,
    };

  await writeFile();

  return product;
}
async function remove(id) {
  const index = products.findIndex((product) => product.id === Number(id));

  if (index === -1) return null;

  const [deletedProduct] = products.splice(index, 1);

  await writeFile();

  return deletedProduct;
}
const productModel = {
  getAll,
  findById,
  create,
  update,
  remove,
};
module.exports = productModel;
