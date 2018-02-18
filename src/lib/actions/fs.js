const fs = require("fs");
const date = require("../converteur/date")
// const moment = require("moment")
// entete nom de fichier pour export csv
const exportNameCsv = "export_csv_";
const horodatage = date.DateNowFile()
const extentionCsv = ".csv";

/**
 * [csvNameFile description]
 * @param {string} fileName [return un nom de fichier daté]
 * @return {string} fileName horodaté
 */
const csvNameFile = fileName => {
  return fileName + horodatage + extentionCsv;
};

/**
 * [WRITE_FILE description]
 * @param {string} file [Fichier]
 * @param {string} data  [Données]
 */
const WRITE_FILE = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject(err);
      resolve(file);
    });
  });
};

/**
 * [WRITE_FILE_CSV description]
 * @param {csv} csv [csv data]
 * @param {obj} err [err]
 */
const WRITE_FILE_CSV = csv => {
  return new Promise((resolve, reject) => {
    WRITE_FILE(csvNameFile(exportNameCsv), csv)
      .then(file => {
        resolve(file);
      })
      .catch(err => {
        reject(err);
      });
  });
};

/**
 * [READ_FILE description]
 * @param {string} path [description]
 * @return {string} data [data read]
 */
const READ_FILE = path => {
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    return data;
  });
};

module.exports = {
  WRITE_FILE_CSV: WRITE_FILE_CSV,
  READ_FILE: READ_FILE
};
