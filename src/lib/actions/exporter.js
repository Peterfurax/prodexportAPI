/**
* Provides modules Actions exporter
 * @module Actions
 * @class Actions exporter
 */

const csvMapper = require("../mapper/csvMapper");
const fileMan = require("../actions/fs");
const date = require("../converteur/date");

/**
 * @method exportCSV
 * @description genere un nom de fichier horaodaté
 * @returns {promise} fileName horodaté
 */
const exportCSV = () => {
  return new Promise((resolve, reject) => {
    console.log(date.DateNow(), "je lance export");
    csvMapper
      .MAPPING_TO_CSV()
      .then(val => {
        fileMan
          .writeFileCSV(val)
          .then(filePath => {
            console.log(filePath);
            resolve("./" + filePath, filePath);
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = { exportCSV: exportCSV };
