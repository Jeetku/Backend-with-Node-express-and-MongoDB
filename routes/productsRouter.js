const express = require("express");
const productController = require("../controllers/product-controller");
const router = express.Router();

//? Products

// ?CREATE POST /products     C R U D

router
  .post("/products", productController.createProduct)

  // ?READ GET /products
  .get("/products", productController.getAllProducts)

  // ?READ GET /products/:id
  .get("/products/:id", productController.getProduct)

  // ?Update PUT /prdoucts/:id

  .put("/products/:id", productController.replaceProducts)

  // ?PATCH product
  .patch("/products/:id", productController.updateProducts)

  // ?DELETE /products/:id

  .delete("/products/:id", productController.deleteProducts);

exports.routes = router;
