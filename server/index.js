const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const mongoose = require("mongoose");
// const { connectToMongoDB } = require("./connection");

//middleware
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});

mongoose
  .connect("mongodb://localhost:27017/inventory-backend")
  .then(() => console.log("Mongodb connected"));

const schema = mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number,
});

const Product = mongoose.model("Product", schema);

// connectToMongoDB("mongodb://localhost:27017/inventory-backend").then(() =>
//   console.log("Mongodb connected")
// );

app.listen(port, () => {
  console.log("server started");
});
