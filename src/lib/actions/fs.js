/**
* Provides modules ACTIONS files
 * @module ACTIONS
 * @class ACTIONS Files
 */
const fs = require("fs");
const date = require("../converteur/date");

/**
 * @method csvNameFile
 * @description genere un nom de fichier horaodaté
 * @return {string} fileName horodaté
 */
const csvNameFile = () => {
  const exportNameCsv = "export_csv_";
  const horodatage = date.DateNowFile();
  const extentionCsv = ".csv";
  return exportNameCsv + horodatage + extentionCsv;
};

/**
 * @method writeFile
 * @description ecrire un fichier sur le fs
 * @param {string} uriFile uri du fichier à ecrire
 * @param {string} data Données
 * @return {promise}
 */
const writeFile = (uriFile, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(uriFile, data, err => {
      if (err) reject(err);
      resolve(uriFile);
    });
  });
};

/**
 * @method writeFileCSV
 * @description ecrire un fichier CSV sur le fs
 * @param {string} csv csv data
 * @return {promise}
 */
const writeFileCSV = csv => {
  return new Promise((resolve, reject) => {
    writeFile(csvNameFile(), csv)
      .then(file => {
        resolve(file);
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
 * @method readFile
 * @description lecture d'un fichier sur le fs
 * @param {string} uriFile uri du fichier à lire
 * @return {string} string des données lu du fichier
 */
const readFile = uriFile => {
  fs.readFile(uriFile, (err, data) => {
    if (err) throw err;
    return data;
  });
};

module.exports = {
  writeFileCSV: writeFileCSV,
  readFile: readFile
};
