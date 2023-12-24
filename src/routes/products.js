const express = require("express");
const productRouter = express.Router();
const {
  getAllProducts,
  getAProduct,
  getBestSellerProduct,
} = require("../api/controllers/products/index");

//get all products
productRouter.get("/products", getAllProducts);

//get best seller products
productRouter.get("/products/best-seller", getBestSellerProduct);

//get a product
productRouter.get("/products/:id", getAProduct);
module.exports = productRouter;
