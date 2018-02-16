const express = require("express");
const router = express.Router();
const store = require("../store/store");
const exporter = require("../actions/exporter");

router.get("/web2web.json", (req, res) => {
  res.json(store.ARR).status(200);
});

router.get("/", (req, res) => {
  res.send("je suis en vie").status(200);
});

router.get("/csv", (req, res) => {
  
  exporter
    .EXPORT_CSV()
    .then((filePath, file) => {
      res.setHeader("Content-Type", "text/csv; charset=UTF-8,%EF%BB%BF");
      res.download(filePath, file);
    })
    .catch(err => {
      console.log(err);
      res.send(err).status(500);
    });
});

module.exports = router;
