require("dotenv").config();
const express = require("express");
const morgan = require("morgan");

const server = express();
const port = 8080;
const mongoose = require("mongoose");

const productRouter = require("./routes/productsRouter");
const userRouter = require("./routes/userRoutes");

// bodyParser
server.use(express.json());

// server.use(express.urlencoded())
server.use(morgan("default"));
server.use(express.static(process.env.PUBLIC_DIR));

//? middlewares
server.use("/api", productRouter.routes);

server.use("/user", userRouter.routes);
// sm5Avh2U9aR0BP78
console.log("env", process.env.DB_PASSWORD);

// ?db Connections
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("Database connection established");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// ?Schema

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

server.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
