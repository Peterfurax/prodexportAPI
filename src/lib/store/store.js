/**
 * Provides modules STORE data
 * @module STORE
 * @class  STORE data
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
    case ".xml":
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
    // console.log(data);
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
 * @description store des les données dans l'array general
 * @param {string} datedExport
 * @param {string} id
 * @param {object} fileList
 */
const storeData = (datedExport, heureExport, id, docList) => {
  let objResult = {};
  objResult.datedExport = datedExport;
  objResult.heureExport = heureExport;
  objResult.id = id;
  objResult.files = {};
  objResult.files.graph = [];
  objResult.files.doc = [];
  docList.map(val => {
    // console.log(fileTypeTest(val.$.href))
    if (fileTypeTest(val.$.href) === "JPEG") objResult.files.graph.push(val);
    if (fileTypeTest(val.$.href) === "XML") objResult.files.doc.push(val);
    if (fileTypeTest(val.$.href) === "INCONNU") {
      console.log("ERRRRRRRRRRRRRRRRRRRRRRRORRRRRRRRRRRRRRRRR INPORT ");
      return;
    }

    // else {
    //   // console.log(val.$)
    //   objResult.files.doc.push(val);
    // }
  });
  webProdexport.response.push(objResult);
  stats.statsCount.exportCount += 1;
  stats.statsCount.loidList.push(objResult.id);
};
/**
 * @method ExtractDocs
 * @description Extrait les données venant d'un prodexport
 * @param {string} datedExport
 * @param {string} id
 * @param {object} data
 */
const ExtractDocs = (datedExport, heureExport, id, data) => {
  // console.log(data)
  if (!data) return;
  AsDocsIN(data.prodexport.file)
    .then(docList => {
      storeData(datedExport, heureExport, id, docList);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = {
  ExtractDocs: ExtractDocs,
  webProdexport: webProdexport
};
