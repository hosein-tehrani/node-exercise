const http = require("http");
const productController = require("./controllers/products.controller");
const errorHandler = require("./controllers/errorHandler.controller");
const PORT = 3000;
const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "content-type": "text/plain" });
  //   res.write("here your first words!");
  //   res.writeHead(200, { "content-type": "html" });
  //   res.write("<h1>here your first words!</h1>");
  //   res.writeHead(200, { "content-type": "application/json" });
  //   res.write(JSON.stringify({ name: "hossein", lastName: "tehrani" }));
  console.log(req.url);
  if (req.url === "/products") {
    if (req.method == "GET") {
      productController.get(req, res);
    }
    if (req.method == "POST") {
      productController.create(req, res);
    }
  } else if (/^\/products\/\d+$/.test(req.url)) {
    productController.getById(req, res);
  } else {
    errorHandler.notFound(res);
  }
});
server.listen(3000, () => {
  console.log(`app served on=> http://localhost:${PORT}/`);
});
