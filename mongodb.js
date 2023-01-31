const { MongoClient } = require("mongodb");
const PORT = process.env.MONGO_URL;
const client = new MongoClient(PORT);
const dbName = "e-com";

const dbConnect = async () => {
  let result = await client.connect();
  let db = result.db(dbName);
  return db.collection("products");
};

module.exports = dbConnect;
