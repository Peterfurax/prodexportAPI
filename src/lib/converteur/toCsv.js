const jsontocsv = require("json-2-csv"); // https://www.npmjs.com/package/json-2-csv
/** options_JSON_TO_CSV */
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
/**
 * JSON TO CSV
 * convert json data to csv with json2csv lib
 * @param {json} json
 */
const JSON_TO_CSV = json => {
  return new Promise((resolve, reject) => {
    const json2csvCallback = (err, csv) => {
      if (err) reject(err);
      resolve(csv);
    };
    jsontocsv.json2csv(json, json2csvCallback, options_JSON_TO_CSV);
  });
};

module.exports = {
  JSON_TO_CSV: JSON_TO_CSV
};
