const http = require("http");
const productController = require("./controllers/products.controller");
const errorHandler = require("./controllers/errorHandler.controller");
const PORT = 3000;
const SINGLE_PRODUCT_ROUTE = /^\/products\/\d+$/;
const server = http.createServer((req, res) => {
  const { url, method } = req;
  //   res.writeHead(200, { "content-type": "text/plain" });
  //   res.write("here your first words!");
  //   res.writeHead(200, { "content-type": "html" });
  //   res.write("<h1>here your first words!</h1>");
  //   res.writeHead(200, { "content-type": "application/json" });
  //   res.write(JSON.stringify({ name: "hossein", lastName: "tehrani" }));
  console.log({ url, method });
  if (url === "/products") {
    if (method == "GET") {
      productController.get(req, res);
    }
    if (method == "POST") {
      productController.create(req, res);
    }
  } else if (SINGLE_PRODUCT_ROUTE.test(url)) {
    if (method == "GET") {
      productController.getById(req, res);
    }
    if (method == "PUT") {
      productController.update(req, res);
    }
    if (method == "DELETE") {
      productController.remove(req, res);
    }
  } else {
    errorHandler.notFound(res);
  }
});
server.listen(3000, () => {
  console.log(`app served on=> http://localhost:${PORT}/`);
});
