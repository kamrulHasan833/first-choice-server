const CartModel = require("../../../models/CartModel");

const deleteACart = async (req, res) => {
  try {
    const id = req?.params?.id;

    const result = await CartModel.deleteOne({
      _id: id,
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = deleteACart;
