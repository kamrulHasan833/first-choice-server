const ProductModel = require("../../../models/ProductModel");

const getAProduct = async (req, res) => {
  try {
    const id = req?.params?.id;
    const result = await ProductModel.findOne({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = getAProduct;
