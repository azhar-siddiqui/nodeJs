const dbConnect = require("./mongodb");
const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data);
});

app.post("/post", async (req, resp) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  resp.send(result);
});

// app.put("/put", async (req, resp) => {
//   let data = await dbConnect();
//   let result = await data.updateOne(
//     req.body({ name: req.body.name }, { $set: req.body })
//   );
//   resp.send(result);
// });

app.listen(4000);
