/**
 * Provides modules class...
 * @module Converter
 * @class Converter csv
 */
const jsontocsv = require("json-2-csv"); // https://www.npmjs.com/package/json-2-csv


/**
 * @public
 * @method JSON_TO_CSV
 * @description convert json data to csv with json2csv lib
 * @param {json} json
 */
const JSON_TO_CSV = json => {
  return new Promise((resolve, reject) => {
    const json2csvCallback = (err, csv) => {
      if (err) reject(err);
      resolve(csv);
    };
    const options_JSON_TO_CSV = {
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
    };
    jsontocsv.json2csv(json, json2csvCallback, options_JSON_TO_CSV);
  });
};

module.exports = {
  JSON_TO_CSV: JSON_TO_CSV
};
