/**
 * Provides modules WEB server
 * @module WEB
 * @class  WEB server
 */
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const compression = require("compression");
const port = process.env.PORT || 4001;
const routes = require("../routes/index");

/**
* Configure `app` to use `express()` 
* @property app
* @type {function}
*/
const app = express();
/**
* Configure `app` to use `routes` 
* @property route
* @type {object}
*/
app.use(routes);
/**
* Configure `app` to use `bodyParser()`
* @property bodyParser
* @type {object}
*/
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

/**
* Configure `app` to `disable("x-powered-by")`
* @property disable x-powered-by
* @type {object}
*/
app.disable("x-powered-by");

/**
* Configure `app` to use `bodyParser.json()`
* @property bodyParserJson
* @type {object}
*/
app.use(bodyParser.json());

/**
* Configure `app` to set `{"json spaces", 2}`
* @property indentJson2Spaces
* @type {object}
*/
app.set("json spaces", 2);

/**
* Configure `app` to use `compression()`
* @property compressHttpResponse
* @type {object}
*/
app.use(compression);

const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {
  app: app
};
