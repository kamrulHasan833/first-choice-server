const CartModel = require("../../../models/CartModel");

const getAllCarts = async (req, res) => {
  try {
    const email = req?.query?.email;

    const result = await CartModel.find({
      email: email,
    });

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = getAllCarts;
