/**
 * Provides modules ACTIONS exporter
 * @module ACTIONS
 * @class ACTIONS exporter
 */

const csvMapper = require("../mapper/csvMapper");
const fileMan = require("../actions/fs");
const date = require("../converteur/date");

const exportToFile = (vals, type, date) => {
  return new Promise((resolve, reject) => {
    fileMan
      .writeFileCSV(vals, type, date)
      .then(filePath => {
        resolve("./" + filePath);
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
const exportCSV = date => {
  return new Promise((resolve, reject) => {
    // console.log(date.DateNow(), "je lance export");
    csvMapper
      .MAPPING_TO_CSV()
      .then(val => {
        // if (type === "article") {
        //   exportToFile(val[0], type)
        //     .then(re => {
        //       resolve(re);
        //     })
        //     .catch(err => {
        //       reject(err);
        //     });
        // }

        exportToFile(val[0], "article", date)
          .then(re => {
            resolve(re);
          })
          .catch(err => {
            reject(err);
          });
        exportToFile(val[1], "graphique", date)
          .then(re => {
            resolve(re);
          })
          .catch(err => {
            reject(err);
          });

        // if (type === "graph") {
        //   exportToFile(val[1], type)
        //     .then(re => {
        //       resolve(re);
        //     })
        //     .catch(err => {
        //       reject(err);
        //     });
        // }
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = { exportCSV: exportCSV };
