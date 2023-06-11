const mongoose = require("mongoose");
const { Schema } = mongoose;
const productsSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, min: [0, "wrong  Price"], required: true },
  discountPercentage: {
    type: String,
    min: [0, "wrong min discount"],
    max: [50, "wrong max discount"],
  },
  rating: { type: Number, min: [0, "wrong rating"], max: [5, "wrong rating"] },
  stock: Number,
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: String,
  images: [String],
});

exports.Product = mongoose.model("Product", productsSchema);
