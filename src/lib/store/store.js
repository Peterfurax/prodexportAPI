const pathfinder = require("path");
let ARR = { response: [] };

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
      console.log(data.length + " FICHIERS A EXPORTER");
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
    .catch(err => {
      console.err(err);
    })
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
      ARR.response.push(objResult);
    });
};

module.exports = {
  EXTRACT_DATA: EXTRACT_DATA,
  ARR: ARR
};
