const ProductModel = require("../../../models/ProductModel");

const getAllProducts = async (req, res) => {
  try {
    const result = await ProductModel.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = getAllProducts;
