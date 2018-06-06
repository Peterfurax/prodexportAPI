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
const csvNameFile = (type, date) => {
  // console.log(date)
  const exportNameCsv = "export_csv_";
  const horodatage = date;
  const extentionCsv = ".csv";
  return exportNameCsv + horodatage +"_"+  type +  extentionCsv;
};

/**
 * @method writeFile
 * @description ecrire un fichier sur le fs
 * @param {string} uriFile uri du fichier à ecrire
 * @param {string} data Données
 * @return {promise}
 */
const writeFile = (uriFile, data, ) => {
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
const writeFileCSV = (csv,type, date) => {
  return new Promise((resolve, reject) => {
    writeFile(csvNameFile(type, date), csv)
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
