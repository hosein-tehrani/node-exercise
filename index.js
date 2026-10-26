const http = require("http");
const productController = require("./controllers/products.controller");
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
    productController.get(req, res);
  } else {
    res.writeHead(200, { "content-type": "html" });
    res.write("<h1>here your first words!</h1>");
  }
});
server.listen(3000, () => {
  console.log(`app served on=> http://localhost:${PORT}/`);
});
