const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("fileName");

app.post("/upload", upload, (req, resp) => {
  resp.send({ msg: "file upload" });
});

app.listen(4000);
