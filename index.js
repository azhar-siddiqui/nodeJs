const { MongoClient, Collection } = require("mongodb");
require("dotenv").config();
const PORT = process.env.MONGO_URL;
const client = new MongoClient(PORT);
const dbName = "e-com";

const getData = async () => {
  let result = await client.connect();
  let db = result.db(dbName);
  let collection = db.collection("products");
  let response = await collection.find({}).toArray();
  console.log(response);
};
getData();
