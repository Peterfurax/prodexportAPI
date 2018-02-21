/**
 * Provides modules to map data to csv field
 * @module Daemon
 * @class  watch daemon
 */

const pathfinder = require("path");
const convert = require("../actions/convert");
const chokidar = require("chokidar");
const date = require("../converteur/date");
const stats = require("../store/stats");
const c = require("../store/log");

const web2WebExt = "WEB2WEB";
/**
 * @method FileWatcher
 * @description watch datingFolder for file and load xmlToJSON when file match fileToWatch
 * @param {string} datingFolder exemple 20180131
 * @param {string} fileToWatch exemple prodexport.xml
 */
let FileWatcher = (datingFolder, fileToWatch) => {
  c.l(date.DateNow() + " WEBTOCSV    =====> DOSSIER " + datingFolder);
  var watcher = chokidar.watch(datingFolder, {
    ignored: /(^|[\/\\])\../,
    persistent: true
  });
  /**
   * FileWatcher ON
   * @method FileWatcherON
   * @param {string} pathUri
   */
  watcher.on("add", pathUri => {
    stats.statsCount.FolderCount += 1;
    let isWeb2WebFolder = pathUri.split(pathfinder.sep)[1].split("_")[1];
    let isTheLastExport = pathUri.split(pathfinder.sep)[2].indexOf("_");
    if (
      isWeb2WebFolder === web2WebExt &&
      isTheLastExport === -1 &&
      pathfinder.basename(pathUri) === fileToWatch
    ) {
      stats.statsCount.prodexportCount += 1;
      convert.xmlToJSON(pathUri);
    }
  });

  watcher
    .on("error", error => console.log(`Watcher error: ${error}`))
    .on("ready", () => {
      c.l(date.DateNow() + " SCANNING ON =====> DOSSIER " + datingFolder);
    });
};
module.exports = {
  FileWatcher: FileWatcher
};
