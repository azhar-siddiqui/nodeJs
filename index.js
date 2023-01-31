require("dotenv").config();
const dbConnect = require("./mongodb");

const update = async () => {
  const db = await dbConnect();
  const result = await db.updateOne(
    { name: "iPhone 6" },
    {
      $set: { name: "iPhone 8" },
    }
  );
  if (result.acknowledged) {
    console.log("data updated");
  } else {
    console.log("Failed");
  }
};

update();
