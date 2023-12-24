const ProductModel = require("../../../models/ProductModel");

const getBestSellerProduct = async (req, res) => {
  try {
    const result = await ProductModel.find({
      status: "best seller",
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = getBestSellerProduct;
