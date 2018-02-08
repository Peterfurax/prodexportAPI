let fs = require('fs');
let actions = require('../actions/actions');
let store = require('../store/store');
let xml2json = require('xml2js');
let pathFinder = require('path');

const datedExport = path => {
  return pathFinder
    .dirname(path)
    .split('\\')[1]
    .split('_')[0];
};

const id = path => {
  return pathFinder
    .dirname(path)
    .split('\\')[2]
    .split('_')[0];
};

const XML_TO_JSON = path => {
  console.log(`TRAITEMENT ========================> ${path}`);
  fs.readFile(path, (err, data) => {
    console.log(`LECTURE    ========================> ${path}`);
    new xml2json.Parser().parseString(data, (err, result) => {
      console.log(`CONVERTION ========================> ${path}`);
      if (err) throw err;
      console.log(`EXTRACTION ========================> ${path}`);
      store.EXTRACT_DATA(datedExport(path), id(path), result);
      // console.log(`EXPORT     ========================> ${path}`)
      // actions.JSON_TO_CSV(result)
    });
  });
};

module.exports = {
  XML_TO_JSON: XML_TO_JSON
};
