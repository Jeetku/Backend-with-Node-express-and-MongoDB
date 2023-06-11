// const fs = require("fs");
// const index = fs.readFileSync("index.html", "utf-8");
// const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const products = data.products;

const model = require("../models/productsModel");
const mongoose = require("mongoose");
const Product = model.Product;

exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  product.save((err, doc) => {
    console.log({ err, doc });
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(doc);
    }
  });
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find({ price: { $gt: 500 } });
  res.status(200).json(products);
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  const products = await Product.findById(id);
  // const product = products.find((p) => p.id === id);
  res.status(200).json(products);
};

exports.replaceProducts = async (req, res) => {
  const id = req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // products.splice(productIndex, 1, { ...req.body, id: id });
  try {
    const products = await Product.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
exports.updateProducts = async (req, res) => {
  const id = req.params.id;
  try {
    const products = await Product.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }

  // const productIndex = products.findIndex((p) => p.id === id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1, { ...product, ...req.body });
  // res.status(201).json();
};

exports.deleteProducts = async (req, res) => {
  const id = req.params.id;
  // const productIndex = products.findIndex((p) => p.id === id);
  // const product = products[productIndex];
  // products.splice(productIndex, 1);

  try {
    const products = await Product.findOneAndDelete({ _id: id });
    res.status(201).json(products);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};
