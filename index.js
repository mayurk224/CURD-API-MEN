const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const Product = require("./models/product.model.js");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.post("/api/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

const mongoURI = process.env.MONGODB_CONNECT;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("server is listening on port 3000");
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
};

connectDB();
