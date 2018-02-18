/**
 * Provides modules class...
 * @module Actions
 * @class  Actions Convert
 */

const toCsv = require("../converteur/toCsv");
const toJson = require("../converteur/toJson");

/**
 * [xmlToJSON description]
 * @param {string} xmlPath [uri du fichier xml a convertir]
 */
const xmlToJSON = xmlPath => {
  toJson.xmlToJSON(xmlPath);
};

/**
 * [JSON_TO_CSV description]
 * @param {json} jsonData [données json a convetir vers CSV]
 */
const JSON_TO_CSV = jsonData => {
  return new Promise((resolve, reject) => {
    toCsv
      .JSON_TO_CSV(jsonData)
      .then(csv => {
        resolve(csv);
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = {
  xmlToJSON: xmlToJSON,
  JSON_TO_CSV: JSON_TO_CSV
};
