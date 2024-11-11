const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my API");
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
