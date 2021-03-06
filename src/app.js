const daemon = require("./lib/daemon/watch");
const stats = require("./lib/store/stats.js");
const date = require("./lib/converteur/date");
const args = process.argv.slice(2);
const c = require("./lib/store/log");
let dateFolder = date.DateNowFile();

if (args.length > 0) {
  c.l("export manuel date demandée = " + args[0]);
  dateFolder = args[0];
  stats.statsCount.isManual = true;
}
stats.statsCount.dateLoading = dateFolder;

daemon.FileWatcher("/EXPORT/export/export_XML/" + dateFolder + "_WEB2WEB/", "prodexport.xml", dateFolder);
// daemon.FileWatcher("/EXPORT/export/export_XML/20180404_WEB2WEB/", "prodexport.xml",dateFolder);

// require("./lib/socket/webServer");
