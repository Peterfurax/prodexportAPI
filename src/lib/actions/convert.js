/**
 * Provides modules ACTIONS
 * @module Actions
 * @class  Actions Convert
 */

const toCsv = require("../converteur/toCsv");
const toJson = require("../converteur/toJson");

/**
 * @method xmlToJSON
 * @description convertie un fichier xml en json
 * @param {string} xmlPath [uri du fichier xml a convertir]
 */
const xmlToJSON = xmlPath => {
  toJson.xmlToJSON(xmlPath);
};

/**
 * @method JsonToCSV
 * @description json a convetir vers CSV
 * @param {json} jsonData données json a convetir vers CSV
 * @return {promise}
 */
const JsonToCSV = jsonData => {
  return new Promise((resolve, reject) => {
    toCsv
      .JsonToCSV(jsonData)
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
  JsonToCSV: JsonToCSV
};
