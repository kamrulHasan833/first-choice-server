const express = require("express");
const cartRouter = express.Router();
const {
  createACart,
  getAllCarts,
  deleteACart,
} = require("../api/controllers/carts/index");

const verifiyUser = require("../middlewares/authentication/verifyUser");
//get all carts
cartRouter.get("/carts", verifiyUser, getAllCarts);

//create a cart
cartRouter.post("/carts", verifiyUser, createACart);

//delete a cart
cartRouter.delete("/carts/:id", verifiyUser, deleteACart);
module.exports = cartRouter;
