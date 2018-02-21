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
 * [JsonToCSV description]
 * @method JsonToCSV
 * @param {json} jsonData [données json a convetir vers CSV]
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
