const productModel = require("../models/products.model");
const errorHandler = require("./errorHandler.controller");

async function get(req, res) {
  try {
    const products = await productModel.getAll();
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.error(error);
  }
}
async function getById(req, res) {
  try {
    const url = req.url;
    const id = url.split("/")[2];
    const product = await productModel.findById(id);
    console.log({ product });
    if (!product) {
      return errorHandler.notProduct(res);
    }
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(product));
    res.end();
  } catch (error) {
    res.writeHead(500, { "content-type": "html" });
    res.end("<h1>Something went wrong!</h1>");
  }
}
async function create(req, res) {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", async () => {
    try {
      const product = { id: Date.now(), ...JSON.parse(body) };
      const result = await productModel.create(product);
      res.writeHead(201, { "content-type": "application/json" });
      res.write(JSON.stringify(result));
      res.end();
    } catch (error) {
      console.error(error);
    }
  });
}
async function update(req, res) {
  const { url } = req;
  const id = url.split("/")[2];
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", async () => {
    try {
      const product = JSON.parse(body);
      console.log({ product });
      const result = await productModel.update(id, product);
      if (!result) {
        errorHandler.notProduct(res);
      } else {
        res.writeHead(200, { "content-type": "application/json" });
        res.write(JSON.stringify(result));
        res.end();
      }
    } catch (error) {
      console.log(error);
    }
  });
}

async function remove(req, res) {
  const url = req.url;
  const id = url.split("/")[2];
  try {
    const result = await productModel.remove(id);
    if (!result) {
      errorHandler.notProduct(res);
    } else {
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(result));
      res.end();
    }
  } catch (error) {
    console.error(error);
  }
}
const productController = {
  get,
  getById,
  create,
  update,
  remove,
};
module.exports = productController;
