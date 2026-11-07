const fs = require("fs");
const { createServer } = require("http");
// const readData = fs.createReadStream("./3- stream-exercise/file.txt");
// const writeData = fs.createWriteStream("./3- stream-exercise/export.txt");
// readData.pipe(writeData);

const server = createServer((req, res) => {
  const readData = fs.createReadStream("./3- stream-exercise/file.txt");
  res.writeHead(200, { "content-type": "text/plain" });
  readData.pipe(res);
});
server.listen(3000, () => {
  console.log("server served on: http://localhost:3000");
});
