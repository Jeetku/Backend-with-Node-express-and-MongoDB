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

server.get("/products/:id", auth, (req, res) => {
  console.log(req.params);
  // res.send("Hello World!");
  res.json({ type: "GET" });
  // res.status(200).send("<h1>Hello</h1>");
  // res.json(products);
  // res.sendFile("F:Backend\backend_MENindex.html");
});
server.post("/post", auth, (req, res) => {
  res.json({ type: "POST" });
});

server.put("/put", (req, res) => {
  res.json({ type: "PUT" });
});

server.delete("/delete", (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/patch", (req, res) => {
  res.json({ type: "PATCH" });
});

server.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
