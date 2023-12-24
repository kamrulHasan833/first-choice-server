const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  product_id: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  quantity: {
    type: Number,
    require: true,
  },
  color: {
    type: String,
    require: true,
  },
  size: {
    type: String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CartModel = mongoose.model("Cart", schema);
module.exports = CartModel;
