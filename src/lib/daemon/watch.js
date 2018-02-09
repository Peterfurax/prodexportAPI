let pathfinder = require("path");
let convert = require("../actions/convert");

/**
 * WATCHER
 *  watch datingFolder for file and load XML_TO_JSON when file match fileToWatch
 * @param {string} datingFolder
 * @param {string} fileToWatch
 */
let WATCHER = (datingFolder, fileToWatch) => {
  require("chokidar")
    .watch(datingFolder, {
      ignored: /(^|[\/\\])\../,
      persistent: true
    })
    .on("add", URI => {
      if (pathfinder.basename(URI) === fileToWatch) convert.XML_TO_JSON(URI);
    });
};
module.exports = {
  WATCHER: WATCHER
};
