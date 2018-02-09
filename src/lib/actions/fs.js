const fs = require("fs");

// entete nom de fichier pour export csv
const exportNameCsv = "export_csv_";
const horodatage = () => Date.now();
const extentionCsv = ".csv";

/**
 * [CSV_NAME_FILE description]
 * @param {string} fileName [return un nom de fichier daté]
 * @return {string} fileName horodaté
 */
const CSV_NAME_FILE = fileName => {
  fileName + horodatage + extentionCsv;
};

/**
 * [WRITE_FILE description]
 * @param {string} file [Fichier]
 * @param {string} data  [Données]
 */
const WRITE_FILE = (file, data) => {
  fs.writeFile(file, data, err => {
    if (err) throw err;
  });
};

/**
 * [WRITE_FILE_CSV description]
 * @param {csv} csv [csv data]
 * @param {obj} err [err]
 */
const WRITE_FILE_CSV = (csv, err) => {
  if (err) throw err;
  WRITE_FILE(CSV_NAME_FILE(exportNameCsv), csv);
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
