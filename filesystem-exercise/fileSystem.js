const fs = require("fs");
/////////////////////////////
/// nonBlocking read file ///
/////////////////////////////
// console.log(1);
// fs.readFile("test.txt", (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log(data.toString());
//   }
// });
// console.log(2);

///////////////////////////
/// blocking  read file ///
///////////////////////////
// console.log(3);
// const data = fs.readFileSync("test.txt", "utf-8");
// console.log(data);
// console.log(4);

//////////////////////////////
////////// WRITE file ////////
//////////////////////////////
const data = "adding data with appending\n";
//flag a means appending data in the file instead of rewriting the file(better use appendFile)
fs.writeFile("./filesystem/test.txt", data, { flag: "a" }, (err) => {
  err && console.log(err);
});
//////////////////////////////
////////// APPEND file ////////
//////////////////////////////
fs.appendFileSync("test2.txt", "appending test\n", (err) => {
  err && console.log(err);
});
//////////////////////////////
////////// REMOVE file ////////
//////////////////////////////
// fs.unlinkSync("test2.txt", (err) => {
//   err && console.log(err);
// });

////////////////////////////////////
////////// check file exist ////////
////////////////////////////////////
const existance = fs.existsSync("test2.txt");
console.log(existance);

////////////////////////////////////
///////////// DIRECTORY  ///////////
////////////////////////////////////
const dirAddress = "./filesystem/test";
//with {recursive: true} we don't get error if directory exists
fs.mkdir(dirAddress, { recursive: true }, (err) => {
  err && console.log(err);
});
fs.readdir(dirAddress, (err, files) => {
  err && console.log(err);
  console.log(files);
});
