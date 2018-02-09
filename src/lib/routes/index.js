const express = require("express");
const router = express.Router();
const store = require("../store/store");
// const convert = require("../actions/converteur");

router.get("/web2web.json", (req, res) => {
  res.json(store.ARR).status(200);
});

router.get("/", (req, res) => {
  res.send("je suis en vie").status(200);
});

module.exports = router;



// router.get("/json", (req, res) => {
//   res.download(convert.JSON_TO_CSV(store.ARR), "report.pdf", function(err) {
//     if (err) {
//       // Handle error, but keep in mind the response may be partially-sent
//       // so check res.headersSent
//     } else {
//       // decrement a download credit, etc.
//     }
//   });
// });

