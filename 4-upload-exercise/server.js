const { createWriteStream } = require("fs");
const http = require("http");
const multiparty = require("multiparty");
const PORT = 3000;
const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === "/" && method == "POST") {
    let form = new multiparty.Form();
    form.parse(req);
    form.on("part", (part) => {
      part
        .pipe(
          createWriteStream("./4-upload-exercise/uploaded/" + part.filename),
        )
        .on("close", () => {
          res.writeHead(200, { "content-type": "text/html" });
          res.write(`<h1>File Uploaded: ${part.filename}</h1>`);
          res.end();
        });
    });
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<form enctype="multipart/form-data" method="POST" action="/">
          <input type="file" name="upload-file">
          <button>upload file</button>
          </form>`);
    res.end();
  }
});
server.listen(PORT, () => {
  console.log(`app served on=> http://localhost:${PORT}/`);
});
