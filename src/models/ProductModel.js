const mongoose = require("mongoose");
const schema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  image: [
    {
      color: {
        type: String,
        require: true,
      },
      url: {
        type: String,
        require: true,
      },
    },
  ],
  rating: {
    type: Number,
  },
  status: {
    type: String,
  },
  size: [{ type: String, require: true }],
  features: [{ type: String, require: true }],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductModel = mongoose.model("Product", schema);
module.exports = ProductModel;
