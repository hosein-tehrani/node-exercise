///////////////////////////////////////////////
// for using fs for using a json as database //
///////////////////////////////////////////////
const fs = require("fs/promises");
const products = require("../data/products.json");
const fileAddress = process.cwd() + "/data/products.json";
const writeFile = async () => {
  await fs.writeFile(fileAddress, JSON.stringify(products));
};
///////////////////////////////////////////////
///////// using mongodb as database ///////////
///////////////////////////////////////////////
const connectToMongoDB = require("../utils/mongodb-connection");
const { ObjectId } = require("mongodb");
const dbPromise = new connectToMongoDB().Get();
async function getAll() {
  const db = await dbPromise;

  const products = await db
    .collection("products")
    .find({})
    .sort({ _id: 1 })
    .toArray();

  return products;
}

async function findById(id) {
  const db = await dbPromise;
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });
  return product;
}
async function create(product) {
  const db = await dbPromise;
  const result = await db.collection("products").insertOne(product);

  return result;
}
async function update(id, product) {
  const db = await dbPromise;
  const result = await db
    .collection("products")
    .updateOne({ _id: new ObjectId(id) }, { $set: { ...product } });

  return result;
}
async function remove(id) {
  const db = await dbPromise;
  const result = await db
    .collection("products")
    .deleteOne({ _id: new ObjectId(id) });

  return result;
}
const productModel = {
  getAll,
  findById,
  create,
  update,
  remove,
};
module.exports = productModel;
