/**
 * Provides modules CONVERTER JSON
 * @module CONVERTER
 * @class CONVERTER json
 */

const fs = require("fs");
const store = require("../store/store");
const xml2json = require("xml2js");
const pathFinder = require("path");
const date = require("../converteur/date");

/**
 * @method datedExport
 * @description extrait la date à travers le nom du dossier
 * @param {string} path UriPath
 * @return {string} "20180131"
 */
const datedExport = path => {
  return pathFinder
    .dirname(path)
    .split("\\")[1]
    .split("_")[0];
};

/**
 * @method idExport
 * @description extrait id à travers le nom du dossier
 * @param {string} path UriPath
 * @return {string} "3.1.012040001"
 */
const idExport = path => {
  return pathFinder
    .dirname(path)
    .split("\\")[2]
    .split("_")[0];
};

/**
 * @method xmlToJSON
 * @description extrait un fichier xml avec son URI
 * lecture, convertion, extration, inscription
 * dans le store
 * @param {string} path UriPath
 */
const xmlToJSON = path => {
  console.log(path)
  console.log(date.DateNow(), `TRAITEMENT  =====> ${path}`);
  fs.readFile(path, (err, data) => {
    console.log(date.DateNow(), `LECTURE     =====> ${path}`);
    new xml2json.Parser().parseString(data, (err, result) => {
      console.log(date.DateNow(), `CONVERTION  =====> ${path}`);
      console.log(err)
      if (err) throw err;
      console.log(date.DateNow(), `EXTRACTION  =====> ${path}`);
      store.ExtractDocs(datedExport(path), idExport(path), result);
    });
  });
};

module.exports = {
  xmlToJSON: xmlToJSON,
  idExport:idExport,
  datedExport: datedExport
};
