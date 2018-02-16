let pathfinder = require("path");
let convert = require("../actions/convert");
let chokidar = require("chokidar");
/**
 * WATCHER
 *  watch datingFolder for file and load XML_TO_JSON when file match fileToWatch
 * @param {string} datingFolder
 * @param {string} fileToWatch
 */
let WATCHER = (datingFolder, fileToWatch) => {
  chokidar
    .watch(datingFolder, {
      ignored: /(^|[\/\\])\../,
      persistent: true
    })
    .on("add", URI => {
      let TestWeb2Web = URI.split(pathfinder.sep)[1].split("_")[1];
      let gestionDoublon = URI.split(pathfinder.sep)[2].indexOf("_");
      if (
        TestWeb2Web === "WEB2WEB" &&
        gestionDoublon === -1 &&
        pathfinder.basename(URI) === fileToWatch
      ) {
        convert.XML_TO_JSON(URI);
      }
    });
};
module.exports = {
  WATCHER: WATCHER
};
