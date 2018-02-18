const fs = require("fs");
// const actions = require('../actions/actions')
const store = require("../store/store");
const xml2json = require("xml2js");
const pathFinder = require("path");
const date = require("../converteur/date");

/**
 * extract datedExport from path folder
 *
 * @param {string} path
 * @returns {string} datedExportFolderWatched
 */
const datedExport = path => {
  return pathFinder
    .dirname(path)
    .split("\\")[1]
    .split("_")[0];
};

/**
 * extract id from path folder
 *
 * @param {any} path
 * @returns IdExportFolderWatched
 */
const id = path => {
  return pathFinder
    .dirname(path)
    .split("\\")[2]
    .split("_")[0];
};

/**
 * XML_TO_JSON
 *
 * @param {string} path path
 */
const XML_TO_JSON = path => {
  console.log(date.DateNow(),`TRAITEMENT  ========================> ${path}`);
  fs.readFile(path, (err, data) => {
    console.log(date.DateNow(),`LECTURE     ========================> ${path}`);
    new xml2json.Parser().parseString(data, (err, result) => {
      console.log(date.DateNow(), `CONVERTION  ========================> ${path}`);
      if (err) throw err;
      console.log(date.DateNow(), `EXTRACTION  ========================> ${path}`);
      store.EXTRACT_DATA(datedExport(path), id(path), result);
      // console.log(`EXPORT      ========================> ${path}`)
      // actions.JSON_TO_CSV(result)
    });
  });
};

module.exports = {
  XML_TO_JSON: XML_TO_JSON
};
