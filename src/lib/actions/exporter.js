/**
 * Provides modules ACTIONS exporter
 * @module ACTIONS
 * @class ACTIONS exporter
 */

const csvMapper = require("../mapper/csvMapper");
const fileMan = require("../actions/fs");
const date = require("../converteur/date");

const exportToFile = vals => {
  return new Promise((resolve, reject) => {
    fileMan
      .writeFileCSV(vals)
      .then(filePath => {
        resolve("./" + filePath, filePath);
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
 * @method exportCSV
 * @description genere un nom de fichier horaodaté
 * @return {promise} fileName horodaté
 */
const exportCSV = type => {
  return new Promise((resolve, reject) => {
    console.log(date.DateNow(), "je lance export");
    csvMapper
      .MAPPING_TO_CSV()
      .then(val => {
        if (type === "article") {
          exportToFile(val[0])
            .then(re => {
              resolve(re);
            })
            .catch(err => {
              reject(err);
            });
        }
        if (type === "graph") {
          exportToFile(val[1])
            .then(re => {
              resolve(re);
            })
            .catch(err => {
              reject(err);
            });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = { exportCSV: exportCSV };
