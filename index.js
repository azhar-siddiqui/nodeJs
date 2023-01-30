const express = require("express");
const app = express();
const reqFilter = require("./middleware");
const route = express.Router();

route.use(reqFilter);

app.get("/", (req, resp) => {
  resp.send("welcome to home Page");
});

app.get("/user", (req, resp) => {
  resp.send("welcome to user Page");
});

route.get("/about", (req, resp) => {
  resp.send("welcome to about Page");
});

route.get("/contact", (req, resp) => {
  resp.send("welcome to contact Page");
});

app.use("/", route);

app.listen(4000);
