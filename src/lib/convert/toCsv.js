const jsontocsv = require('json-2-csv')
const actions = require('../actions/actions')

/**
 * CSV CALLBACK
 * 
 * @param {err} err 
 * @param {any} csv 
 * @returns 
 */
const json2csvCallback = (err, csv) => {
  if (err) throw err
  actions.WRITE_FILE_CSV(csv, err)
  return csv
}


/**
 * JSON TO CSV
 * convert json data to csv with json2csv lib
 * @param {json} json 
 */
const JSON_TO_CSV = json => jsontocsv.json2csv(json.response, json2csvCallback).then(result =>{console.log(result)})

// MODULE EXPORT
module.exports = {
  JSON_TO_CSV: JSON_TO_CSV
}
