const dbConnect = require("./mongodb");

const insert = async () => {
  const db = await dbConnect();
  const result = await db.insert([
    {
      name: "iPhone 6",
      brand: "apple",
      price: "1000$",
      category: "mobile",
    },
    {
      name: "iPhone 7",
      brand: "apple",
      price: "1200$",
      category: "mobile",
    },
  ]);
  if (result.acknowledged) {
    console.log("data Insert");
  } else {
    console.log("data Failed");
  }
};

insert();
