/**
 * Provides modules WEB server
 * @module WEB
 * @class  WEB routes
 */

const express = require("express");

const store = require("../store/store");
const exporter = require("../actions/exporter");
const stats = require("../store/stats");
/**
 * Configure `router` to use `express.Router()`
 * @property app
 * @type {function}
 * @default {router}
 */
const router = express.Router();
function capturePut(req, res) {
  // console.log(req.params.per);
  // res.json(req.params);
}
// TEST

router.route("/perma:per").get((req, res) => {
  // console.log("cici");
  capturePut(req, res);
});

// TEST

/**
 * Configure `router` to get `/json`
 * @property /json
 * @type {function}
 * @default {json} json
 */
router.get("/json", (req, res) => {
  res.json(store.webProdexport).status(200);
});

/**
 * Configure `router` to get `/`
 * @property /
 * @type {function}
 * @default {string} hello
 */
router.get("/", (req, res) => {
  res.send("je suis en vie").status(200);
});

/**
 * Configure `router` to get `/stats`
 * @property /stats
 * @type {function}
 * @default {json} stats
 */
router.get("/stats", (req, res) => {
  res.json(stats).status(200);
});

/**
 * Configure `router` to get `/article`
 * @property /article
 * @type {function}
 * @default {string} csv
 */
router.get("/article", (req, res) => {
  exporter
    .exportCSV("article")
    .then((filePath, file) => {
      res.setHeader("Content-Type", "text/csv; charset=UTF-8,%EF%BB%BF");
      res.download(filePath, file);
    })
    .catch(err => {
      console.log(err);
      res.send(err).status(500);
    });
});

/**
 * Configure `router` to get `/graph`
 * @property /graph
 * @type {function}
 * @default {string} csv
 */
router.get("/graphique", (req, res) => {
  exporter
    .exportCSV("graph")
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
