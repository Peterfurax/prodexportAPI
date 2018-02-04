// CONVERTE CSV CALLBACK
json2csvCallback = (err, csv) => {
  if (err) throw err
  // console.log(csv)
  return csv
  // require('../actions/actions').WRITE_FILE_CSV(csv, err)
}
// FNC PRINCIPALE
JSON_TO_CSV = (json) => require('json-2-csv').json2csv(json, json2csvCallback)

// MODULE EXPORT
module.exports = {
  JSON_TO_CSV: JSON_TO_CSV
}
