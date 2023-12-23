const express = require("express");
const userRouter = express.Router();
const { createAUser } = require("../api/controllers/user/index");

// create a user
userRouter.post("/users", createAUser);

module.exports = userRouter;
