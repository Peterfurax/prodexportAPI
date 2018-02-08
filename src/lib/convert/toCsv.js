let jsontocsv = require('json-2-csv');
let actions = require('../actions/actions');
// CONVERTE CSV CALLBACK
json2csvCallback = (err, csv) => {
  if (err) throw err;
  actions.WRITE_FILE_CSV(csv, err);
  return csv;
};
// FNC PRINCIPALE
JSON_TO_CSV = json => jsontocsv.json2csv(json.toto, json2csvCallback);

// MODULE EXPORT
module.exports = {
  JSON_TO_CSV: JSON_TO_CSV
};
