const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect");
require("dotenv").config();

// internal modules
const { authRouter, userRoute } = require("./routes/index");
// server running port
const port = process.env.PORT || 5000;
const defaultPath = "/first-choice/v1";
// create app
const app = express();

// common middleware
app.use(express.json());
app.use(cors());

// default route
app.get("/", (req, res) => {
  res.send("First Choice app is running well...");
});

// important routes
app.use(defaultPath, authRouter);
app.use(defaultPath, userRoute);

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
  });
};
module.exports = main;
