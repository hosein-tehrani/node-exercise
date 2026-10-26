const productModel = require("../models/products.model");

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
const productController = {
    get
}
module.exports = productController;
