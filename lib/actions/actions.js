
/**
 * [XML_TO_JSON description]
 * @param {[type]} xmlPath [uri du fichier xml a convertir]
 */
XML_TO_JSON = (xmlPath) => {
  require('../convert/toJson').XML_TO_JSON(xmlPath)
  require('../socket/socket').OPEN_SOCKET("dds")

}


/**
 * [JSON_TO_CSV description]
 * @param {[type]} jsonData [données json a convetir vers CSV]
 */
JSON_TO_CSV = (jsonData) => {
  require('../convert/toCsv').JSON_TO_CSV(jsonData)
}



/**
 * [WRITE_FILE description]
 * @param {[type]} file [Fichier]
 * @param {[type]} data  [Données]
 */
WRITE_FILE = (file, data) =>{
require('fs').writeFile(file, data, err => {
    if (err) throw err
  })
}


/**
 * [CSV_NAME_FILE description]
 * @param {[type]} fileName [return un nom de fichier daté]
 * @param {[type]} err      [Gestion erreur]
 */
CSV_NAME_FILE = (fileName, err) =>{
if (err) throw err
return fileName+Date.now()+'.csv'
}

DATA = (data) => {}


/**
 * [WRITE_FILE_CSV description]
 * @param {[type]} csv [description]
 * @param {[type]} err [description]
 */
WRITE_FILE_CSV = (csv, err) => {
  if (err) throw err
  WRITE_FILE(CSV_NAME_FILE('export_csv_'), csv)
}

READ_FILE = (path) => {
  require('fs').readFile(path, (err, data) => {
    if (err) throw err
    // console.log(data)
    return data
  })
}

module.exports = {
  XML_TO_JSON: XML_TO_JSON,
  JSON_TO_CSV: JSON_TO_CSV,
  DATA: DATA,
  WRITE_FILE_CSV: WRITE_FILE_CSV,
  READ_FILE:READ_FILE
}
