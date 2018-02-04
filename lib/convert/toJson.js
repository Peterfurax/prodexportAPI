let fs = require('fs')
let actions = require('../actions/actions')
let store = require('../store/store')
let arrayFi = []
let ARR = []
const XML_TO_JSON = path => {
  console.log(`TRAITEMENT ========================> ${path}`)

  console.log(`LECTURE    ========================> ${path}`)
  fs.readFile(path, function(err, data) {
    console.log(`CONVERTION ========================> ${path}`)
    new require('xml2js').Parser().parseString(data, (err, result) => {
      if (err) throw err
      // console.log(result)
      console.log(`EXTRACTION ========================> ${path}`)
      store.EXTRACT_DATA(result)
      // console.log(`EXPORT     ========================> ${path}`)
      // actions.JSON_TO_CSV(result)
    })
  })
}

module.exports = {
  XML_TO_JSON: XML_TO_JSON
}
