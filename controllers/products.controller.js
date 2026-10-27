const productModel = require("../models/products.model");
const errorHandler = require("./errorHandler.controller");

async function get(req, res) {
  try {
    const products = await productModel.find();
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(products));
    res.end();
  } catch (error) {
    console.log(error);
  }
}
async function getById(req, res) {
  try {
    const url = req.url;
    let id;
    if (typeof url === "string") {
      id = url.split("/")[2];
      console.log(id);
      if (!id) {
        res.writeHead(404, { "content-type": "application/json" });
        res.write(
          JSON.stringify({ status: 404, message: "product not found!" }),
        );
        res.end();
        return;
      }
      const product = await productModel.findById(id);
      console.log({ product });

      if (!product) {
        return errorHandler.notProduct(res);
      }
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify({ product }));
      res.end();
    }
  } catch (error) {
      res.writeHead(500, { "content-type": "html" });
      res.end("<h1>Something went wrong!</h1>");
  }
}
const productController = {
  get,
  getById,
};
module.exports = productController;
