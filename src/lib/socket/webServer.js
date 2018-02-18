const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const compression = require("compression");
const port = process.env.PORT || 4001;
const index = require("../routes/index");

const app = express();
app.use(index);
// - Configure `app` to use `bodyParser()`
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
// - Security disable x-powered-by
app.disable("x-powered-by");
// - This will let us get the data from a POST
app.use(bodyParser.json());
// - Configure `app.set()` to indent json with 2 spaces in httpResponse
app.set("json spaces", 2);
// compression
app.use(compression);

const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {
  app: app
};
