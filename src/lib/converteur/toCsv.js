const jsontocsv = require("json-2-csv");
const files = require("../actions/fs");


/**
 * JSON TO CSV
 * convert json data to csv with json2csv lib
 * @param {json} json
 */
const JSON_TO_CSV = json => {
  return new Promise((resolve, reject) => {
    jsontocsv.json2csv(json, (err, csv) => {
      if (err) reject(err);
      resolve(csv);
    });
  });
};

// MODULE EXPORT
module.exports = {
  JSON_TO_CSV: JSON_TO_CSV
};
