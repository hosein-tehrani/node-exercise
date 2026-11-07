// const buffer = Buffer.alloc(15);
// buffer.write("hossein");
// const buff2 = Buffer.from("Hossein");
// console.log(buffer);
// console.log(buff2);
const fs = require("fs");
const readData = fs.createReadStream("./3- stream-exercise/file.txt");
const writeData = fs.createWriteStream("./3- stream-exercise/export.txt");
const total = [];
writeData.on("ready", () => {
  console.log("file ready to write!");
});
readData.on("ready", () => {
  console.log("file ready to stream!");
});
readData.on("data", (chunk) => {
  console.log("reading data ...");
  total.push(chunk);
  writeData.write(chunk);
});
readData.on("end", () => {
  writeData.end();
  console.log("reading file finished!");
});
readData.on("error", (err) => {
  console.error("reading error: ", err);
});
writeData.on("close", () => {
  console.log("writing file finished!");
});
writeData.on("error", (err) => {
  console.error("writing err: ", err);
});
