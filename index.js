const lib = require("./lib.js");
// import { sum, diff } from "./lib.js";

const express = require("express");
const server = express();
server.listen(8080);
console.log("Hello");
const fs = require("fs");
const t1 = performance.now();
const txt = fs.readFileSync("demo.txt", "utf-8");
// fs.readFile("demo.txt", "utf-8", (err, text) => {
//   console.log(text);
// });

console.log(txt);
console.log(lib.sum(4, 5), lib.diff(5, 8));
const t2 = performance.now();
console.log(t2 - t1);
