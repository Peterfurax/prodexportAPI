const toCsv = require("../converteur/toCsv");
const toJson = require("../converteur/toJson");

/**
 * [XML_TO_JSON description]
 * @param {string} xmlPath [uri du fichier xml a convertir]
 */
const XML_TO_JSON = xmlPath => {
  toJson.XML_TO_JSON(xmlPath);
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
  XML_TO_JSON: XML_TO_JSON,
  JSON_TO_CSV: JSON_TO_CSV
};
