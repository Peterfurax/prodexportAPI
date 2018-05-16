/**
 * Provides modules DAEMON watch
 * @module DAEMON
 * @class  DAEMON watch
 */

const pathfinder = require("path");
const convert = require("../actions/convert");
const chokidar = require("chokidar");
const date = require("../converteur/date");
const stats = require("../store/stats");
const c = require("../store/log");
const exporter = require("../actions/exporter");
const web2WebExt = "WEB2WEB";
/**
 * @method FileWatcher
 * @description watch datingFolder for file and load xmlToJSON when file match fileToWatch
 * @param {string} datingFolder exemple 20180131
 * @param {string} fileToWatch exemple prodexport.xml
 */
let FileWatcher = (datingFolder, fileToWatch, dated) => {
  console.log(datingFolder + "*/" + fileToWatch);
  c.l(date.DateNow() + " WEBTOCSV    =====> DOSSIER " + datingFolder);
  var watcher = chokidar.watch(datingFolder + "*/" + fileToWatch, {
    ignored: /(^|[\/\\])\../,
    persistent: true,
    usePolling: true,
    followSymlinks: true
  });
  /**
   * FileWatcher ON
   * @method FileWatcherON
   * @param {string} pathUri
   */
  watcher.on("add", pathUri => {
    stats.statsCount.FolderCount += 1;
    // let isWeb2WebFolder = pathUri.split(pathfinder.sep)[1].split("_")[1];
    // let isTheLastExport = pathUri.split(pathfinder.sep)[2].indexOf("_");
    // console.log(pathUri)
    // console.log(isWeb2WebFolder)
    // console.log(isWeb2WebFolder)
    // console.log(isTheLastExport)
    if (
      // isWeb2WebFolder === web2WebExt &&
      // isTheLastExport === -1 &&
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
      exporter
        .exportCSV(dated)
        .then((filePath, file) => {
          console.log(filePath, file);
          process.exit(0)
          // res.setHeader("Content-Type", "text/csv; charset=UTF-8,%EF%BB%BF");
          // res.download(filePath, file);
        })
        .catch(err => {
          console.log(err);
          process.exit(2)
          // res.send(err).status(500);
        });
    });
};
module.exports = {
  FileWatcher: FileWatcher
};
