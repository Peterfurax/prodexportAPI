const toCsv = require('../convert/toCsv')
const toJson = require('../convert/toJson')
const fs = require('fs')

// entete nom de fichier pour export csv
const exportNameCsv = 'export_csv_'

/**
 * [XML_TO_JSON description]
 * @param {string} xmlPath [uri du fichier xml a convertir]
 */
const XML_TO_JSON = xmlPath => {
  toJson.XML_TO_JSON(xmlPath)
}

/**
 * [JSON_TO_CSV description]
 * @param {json} jsonData [données json a convetir vers CSV]
 */
const JSON_TO_CSV = jsonData => {
  toCsv.JSON_TO_CSV(jsonData)
}

/**
 * [WRITE_FILE description]
 * @param {string} file [Fichier]
 * @param {string} data  [Données]
 */
const WRITE_FILE = (file, data) => {
  fs.writeFile(file, data, err => {
    if (err) throw err
  })
}

/**
 * [CSV_NAME_FILE description]
 * @param {string} fileName [return un nom de fichier daté]
 * @param {obj} err      [Gestion erreur]
 */
const CSV_NAME_FILE = (fileName, err) => {
  if (err) throw err
  return fileName + Date.now() + '.csv'
}


/**
 * [WRITE_FILE_CSV description]
 * @param {csv} csv [csv data]
 * @param {obj} err [err]
 */
const WRITE_FILE_CSV = (csv, err) => {
  if (err) throw err
  WRITE_FILE(CSV_NAME_FILE(exportNameCsv), csv)
}

/**
 * [READ_FILE description]
 * @param {string} path [description]
 * @return {string} data [data read]
 */
const READ_FILE = path => {
  fs.readFile(path, (err, data) => {
    if (err) throw err
    return data
  })
}

module.exports = {
  XML_TO_JSON: XML_TO_JSON,
  JSON_TO_CSV: JSON_TO_CSV,
  WRITE_FILE_CSV: WRITE_FILE_CSV,
  READ_FILE: READ_FILE
}
