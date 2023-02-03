const express = require("express");
require("./config");

const Product = require("./product");

const app = express();
app.use(express.json());

app.post("/create", async (req, resp) => {
  let data = new Product(req.body);
  let result = await data.save();
  resp.send({ msg: "Data added Successfully", data: result });
});

app.get("/list", async (req, resp) => {
  let data = await Product.find();
  resp.send(data);
});

app.get("/list/:_id", async (req, resp) => {
  let data = await Product.find(req.params);
  resp.send(data);
});

app.get("/delete/:_id", async (req, resp) => {
  let data = await Product.deleteOne(req.params);
  resp.send({ msg: "Data Deleted Successfully" });
});

app.put("/update/:_id", async (req, resp) => {
  let data = await Product.updateOne(req.params, { $set: req.body });
  resp.send(data);
});

app.listen(4000);
