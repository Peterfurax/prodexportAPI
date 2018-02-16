const jsontocsv = require("json-2-csv");


var options = {
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
  checkSchemaDifferences: false,
  // keys: [
  //   "Make",
  //   "Model",
  //   "Year",
  //   "Specifications.Mileage",
  //   "Specifications.Trim"
  // ]
};


// var json2csvCallback = function(err, csv) {
//   if (err) throw err;
//   console.log(csv);
// };

// converter.json2csv(documents, json2csvCallback, options);

/**
 * JSON TO CSV
 * convert json data to csv with json2csv lib
 * @param {json} json
 */
const JSON_TO_CSV = json => {
  return new Promise((resolve, reject) => {

    let  json2csvCallback = (err, csv) => {
      // console.log(csv);
      if (err) reject(err);
      resolve(csv);
    };

    jsontocsv.json2csv(json, json2csvCallback, options);
  });
};

// MODULE EXPORT
module.exports = {
  JSON_TO_CSV: JSON_TO_CSV
};
