/**
 * Provides modules to map data to csv field
 * @module Mapper
 * @class  csv Mapper
 */

const store = require("../store/store");
const convert = require("../actions/convert");
const article = require("./article");

/**
 * @method MAPPING_TO_CSV
 * @description extrait les metadadonnées
 * @return {object}
 */
const MAPPING_TO_CSV = () => {
  console.log("MAPPING_TO_CSV");
  return new Promise((resolve, reject) => {
    let docs = [];
    store.webProdexport.response.map(val => {
      docs.push(article.extractArt(val.files.doc[0]));
      convert
        .JsonToCSV(docs)
        .then(val => {
          resolve(val);
        })
        .catch(err => {
          if (err) console.log(err);
          reject(err);
        });
    });
  });
};

module.exports = {
  MAPPING_TO_CSV: MAPPING_TO_CSV
};
