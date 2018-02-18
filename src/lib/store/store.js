const pathfinder = require("path");
const webProdexport = { response: [] };
const date = require("../converteur/date");
const stats = require("../store/stats");
/**
 * fileTypeTest
 *
 * @param {any} file
 * @returns
 */
const fileTypeTest = file => {
  switch (pathfinder.extname(file)) {
    case ".JPEG":
      return "JPEG";
    case ".XML":
      return "XML";
    default:
      return "INCONNU";
  }
};

/**
 * extractFile
 *
 * @param {any} data
 * @returns
 */
const extractFile = data => {
  return new Promise((resolve, reject) => {
    if (data.length < 1) {
      reject("pas de fichiers");
    } else {
      console.log(
        date.DateNow(),
        "IMPORTATION ========================>",
        data.length,
        "Fichiers importés"
      );
      resolve(data);
    }
  });
};

/**
 * EXTRACT_DATA
 *
 * @param {string} datedExport
 * @param {string} id
 * @param {json} data
 */
const EXTRACT_DATA = (datedExport, id, data) => {
  let objResult = {};
  objResult.datedExport = datedExport;
  objResult.id = id;
  extractFile(data.prodexport.file)
    .then(fileList => {
      // TODO a reecrire trop moche le for
      objResult.files = {};
      objResult.files.graph = [];
      objResult.files.doc = [];
      for (var i = 0; i < fileList.length; i++) {
        if (fileTypeTest(fileList[i].$.href) === "JPEG") {
          objResult.files.graph.push(fileList[i]);
        } else {
          objResult.files.doc.push(fileList[i]);
        }
      }
      webProdexport.response.push(objResult);
      stats.statsCount.exportCount += 1;
      stats.statsCount.loidList.push(id);
    })
    .catch(err => {
      console.error(err);
    });
};

module.exports = {
  EXTRACT_DATA: EXTRACT_DATA,
  webProdexport: webProdexport
};
