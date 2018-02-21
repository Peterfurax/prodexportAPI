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
 * @requires chokidar https://github.com/paulmillr/chokidar
 */
let FileWatcher = (datingFolder, fileToWatch) => {
  c.l(date.DateNow() + " WEBTOCSV    =====> DOSSIER " + datingFolder);
  var watcher = chokidar.watch(datingFolder, {
    ignored: /(^|[\/\\])\../,
    persistent: true
  });
  /**
   * FileWatcher ON
   * @author Pierre Montoya
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
    // .on("addDir", path => console.log(`Directory ${path} has been added`))
    // .on("unlinkDir", path => console.log(`Directory ${path} has been removed`))
    .on("error", error => console.log(`Watcher error: ${error}`))
    .on("ready", () => {
      c.l(date.DateNow() + " SCANNING ON =====> DOSSIER " + datingFolder);
      // var watchedPaths = watcher.getWatched();
      // console.log(watchedPaths)
    });
  // .on("raw", (event, path, details) => {
  //   //  c.l(date.DateNow() + "Raw event info:"+ event+ path+ details);
  //   // terma.spinner("SCANNING DOSSIER", "stop");
  // });
};
module.exports = {
  FileWatcher: FileWatcher
};
