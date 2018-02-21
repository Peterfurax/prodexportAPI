/**
 * Provides modules STORE
 * @module Store
 * @class  data Store
 */

const pathfinder = require("path");
const webProdexport = { response: [] };
const date = require("../converteur/date");
const stats = require("../store/stats");

/**
 * @method fileTypeTest
 * @description test l'extension d'un path file
 * @param {string} fileUriString
 */
const fileTypeTest = fileUriString => {
  switch (pathfinder.extname(fileUriString)) {
    case ".JPEG":
      return "JPEG";
    case ".XML":
      return "XML";
    default:
      return "INCONNU";
  }
};

/**
 * @method AsDocsIN
 * @description test la présence d'un article dans le fichier prodexport
 * @param {object} data
 */
const AsDocsIN = data => {
  return new Promise((resolve, reject) => {
    if (data.length < 1) {
      reject("On passe ! Pas d'article dans le fichier");
    } else {
      console.log(
        date.DateNow(),
        "IMPORTATION =====>",
        data.length,
        "Fichiers importés"
      );
      resolve(data);
    }
  });
};

/**
 * @method storeData
 * @description staore des les données dans l'array general
 * @param {string} datedExport
 * @param {string} id
 * @param {object} fileList
 */
const storeData = (datedExport, id, docList) => {
  let objResult = {};
  objResult.datedExport = datedExport;
  objResult.id = id;
  objResult.files = {};
  objResult.files.graph = [];
  objResult.files.doc = [];
  docList.map(val => {
    if (fileTypeTest(val.$.href) === "JPEG") {
      objResult.files.graph.push(val);
    } else {
      objResult.files.doc.push(val);
    }
  });
  webProdexport.response.push(objResult);
  stats.statsCount.exportCount += 1;
  stats.statsCount.loidList.push(objResult.id);
};
/**
 * @method ExtractDocs
 * @description Extrait les données venant d'un
 * @param {string} datedExport
 * @param {string} id
 * @param {object} data
 */
const ExtractDocs = (datedExport, id, data) => {
  AsDocsIN(data.prodexport.file)
    .then(docList => {
      storeData(datedExport, id, docList);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = {
  ExtractDocs: ExtractDocs,
  webProdexport: webProdexport
};
