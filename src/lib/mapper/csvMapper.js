/**
 * Provides modules MAPPER csv
 * @module MAPPER
 * @class  MAPPER csv
 */

const store = require("../store/store");
const convert = require("../actions/convert");
const article = require("./article");
const photo = require("./photo");

const lanceConvert = data => {
  return new Promise((resolve, reject) => {
    convert
      .JsonToCSV(data)
      .then(val => {
        resolve(val);
      })
      .catch(err => {
        if (err) console.log(err);
        reject(err);
      });
  });
};

/**
 * @method MAPPING_TO_CSV
 * @description extrait les metadadonnées
 * @return {object}
 */
const MAPPING_TO_CSV = () => {
  // console.log("MAPPING_TO_CSV");
  return new Promise((resolve, reject) => {
    let doc = [];
    let graphs = [];
    let graphsTrait = [];
    store.webProdexport.response.map(val => {
      console.log(val.files.graph[0]);
      // if (!val.files.doc[0]) {%
      //   return;
      // } else {
      //   val.files.doc[0].datedExport = val.datedExport;
      //   val.files.doc[0].heureExport = val.heureExport;
      //   doc.push(article.extractArt(val.files.doc[0]));
      //   val.files.graph.map(graph => {
      //     graph.dbMetadata[0].sys[0].loidArticle =
      //       val.files.doc[0].dbMetadata[0].sys[0].loid;
      //     graph.dbMetadata[0].sys[0].datedExport = val.datedExport;
      //     graph.dbMetadata[0].sys[0].heureExport = val.heureExport;
      //     graphs.push(graph);
      //   });
      //   graphsTrait = photo.extractPho(graphs);
      // }
      if (val.files.doc[0]) {
        val.files.doc[0].datedExport = val.datedExport;
        val.files.doc[0].heureExport = val.heureExport;
      }

      doc.push(article.extractArt(val.files.doc[0]));
      val.files.graph.map(graph => {
        if (val.files.doc[0]) {
          graph.dbMetadata[0].sys[0].loidArticle =
            val.files.doc[0].dbMetadata[0].sys[0].loid;
        }
        // graph.dbMetadata[0].sys[0].loidArticle =
        //   val.files.doc[0].dbMetadata[0].sys[0].loid;
        graph.dbMetadata[0].sys[0].datedExport = val.datedExport;
        graph.dbMetadata[0].sys[0].heureExport = val.heureExport;
        graphs.push(graph);
      });
      graphsTrait = photo.extractPho(graphs);
    });
    Promise.all([lanceConvert(doc), lanceConvert(graphsTrait)])
      .then((val) => resolve(val))
      .catch(err => reject(err));
  });
};

module.exports = {
  MAPPING_TO_CSV: MAPPING_TO_CSV
};
