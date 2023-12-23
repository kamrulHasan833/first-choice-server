const express = require("express");
const authRouter = express.Router();
const { getToken } = require("../api/controllers/authentication/index");

authRouter.post("/auth", getToken);

module.exports = authRouter;
