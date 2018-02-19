const daemon = require("./lib/daemon/watch");
const stats = require("./lib/store/stats.js");
const date = require("./lib/converteur/date");
const args = process.argv.slice(2);
const c = require("./lib/store/log");
/**
 * EXTRACT DATA FROM PRODEXPORT
 * 03/02/2018 PMONTOYA
 */
let dateFolder = date.DateNowFile();

if (args.length > 0) {
  c.l("export manuel date demandée = " + args[0]);
  dateFolder = args[0];
  stats.statsCount.isManual = true;
}
stats.statsCount.dateLoading = dateFolder;

/**
 * Lancement du server web
 */
require("./lib/socket/webServer");
/**
 * Lancement du daemon pour scruter dossier daté.
 */


/**
 * chokidar
 * 
 */

daemon.FileWatcher("Web2Web\\" + dateFolder + "_WEB2WEB", "prodexport.xml");
