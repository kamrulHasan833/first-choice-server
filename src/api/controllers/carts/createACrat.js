const CartModel = require("../../../models/CartModel");

const createACart = async (req, res) => {
  try {
    const cart = req?.body;
    const newCart = new CartModel(cart);
    const result = await newCart.save();

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
module.exports = createACart;
