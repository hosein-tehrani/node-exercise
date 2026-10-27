const notFound = (res) => {
  res.writeHead(404, { "content-type": "text/html" });
  res.end("<h1>Page not found!</h1>");
};
const notProduct = (res) => {
  res.writeHead(404, { "content-type": "html" });
  res.end("<h1>product not found!</h1>");
};
const errorHandler = {
  notFound,
  notProduct,
};
module.exports = errorHandler;
