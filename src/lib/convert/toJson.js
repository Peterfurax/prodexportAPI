const fs = require('fs')
// const actions = require('../actions/actions')
const store = require('../store/store')
const xml2json = require('xml2js')
const pathFinder = require('path')

/**
 * datedExport
 * 
 * @param {any} path 
 * @returns 
 */
const datedExport = path => {
  return pathFinder
    .dirname(path)
    .split('\\')[1]
    .split('_')[0]
}

/**
 * id
 * 
 * @param {any} path 
 * @returns 
 */
const id = path => {
  return pathFinder
    .dirname(path)
    .split('\\')[2]
    .split('_')[0]
}

/**
 * XML_TO_JSON
 * 
 * @param {any} path 
 */
const XML_TO_JSON = path => {
  console.log(`TRAITEMENT ========================> ${path}`)
  fs.readFile(path, (err, data) => {
    console.log(`LECTURE    ========================> ${path}`)
    new xml2json.Parser().parseString(data, (err, result) => {
      console.log(`CONVERTION ========================> ${path}`)
      if (err) throw err
      console.log(`EXTRACTION ========================> ${path}`)
      store.EXTRACT_DATA(datedExport(path), id(path), result)
      // console.log(`EXPORT     ========================> ${path}`)
      // actions.JSON_TO_CSV(result)
    })
  })
}

module.exports = {
  XML_TO_JSON: XML_TO_JSON
}
