/**
 * Provides modules class...
 * @module Converter
 * @class Converter csv
 */
const jsontocsv = require("json-2-csv"); // https://www.npmjs.com/package/json-2-csv

/**
 * @public
 * @method JsonToCSV
 * @description convert json data to csv with json2csv lib
 * @param {json} json
 */
const JsonToCSV = json => {
  return new Promise((resolve, reject) => {
    jsontocsv.json2csv(
      json,
      (err, csv) => {
        if (err) reject(err);
        resolve(csv);
      },
      {
        delimiter: {
          wrap: '"', // Double Quote (") character
          field: ";", // Comma field delimiter
          array: ",", // Semicolon array value delimiter
          eol: "\n" // Newline delimiter
        },
        prependHeader: true,
        sortHeader: false,
        trimHeaderValues: true,
        trimFieldValues: true,
        checkSchemaDifferences: false
      }
    );
  });
};

module.exports = {
  JsonToCSV: JsonToCSV
};
