const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const morgan = require("morgan");
const server = express();
const port = 8080;

// bodyParser
server.use(express.json());

// server.use(express.urlencoded())
server.use(morgan("default"));
server.use(express.static("public"));

// server.use((req, res, next) => {
//   console.log(req.method, req.url, req.ip, req.hostname);
// console.log("LOGGED");
//   next();
// });

const auth = (req, res, next) => {
  // console.log(req.query);
  // if (req.body.password === "123") {
  //   next();
  // } else {
  //   res.sendStatus(401);
  // }
  next();
};
// server.use(auth);

// server.get("/products/:id", auth, (req, res) => {
// console.log(req.params);
// res.send("Hello World!");
// res.json({ type: "GET" });
// res.status(200).send("<h1>Hello</h1>");
// res.json(products);
// res.sendFile("F:Backend\backend_MENindex.html");
// });

//? Products

// ?CREATE POST /products     C R U D

server.post("/products", auth, (req, res) => {
  console.log(req.body);
  products.push(req.body);
  res.status(201).json({ type: "POST" });
});

// ?READ GET /products
server.get("/products", function (req, res) {
  res.status(200).json(products);
});

// ?READ GET /products/:id
server.get("/products/:id", function (req, res) {
  const id = +req.params.id;
  const product = products.find((p) => p.id === id);
  res.status(200).json(product);
});

// ?Update PUT /prdoucts/:id

server.put("/products/:id", function (req, res) {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json();
});

// ?PATCH product
server.patch("/products/:id", function (req, res) {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json();
});

// ?DELETE /products/:id

server.delete("/products/:id", function (req, res) {
  const id = +req.params.id;
  const productIndex = products.findIndex((p) => p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(201).json(product);
});

server.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
