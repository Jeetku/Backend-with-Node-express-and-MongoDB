const http = require("http");
const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf8");
const index = fs.readFileSync("data.json", "utf8");
const data = {
  age: 5,
};
const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log("Server started");
  //   res.setHeader("Dummy", "Dummy Header");
  // res.setHeader("Content-Type", "text/html");
  res.setHeader("Content-Type", "application/json");
  // res.end(JSON.stringify(data));
  res.end(index);
});

server.listen(8080);
