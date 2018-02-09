const SOCKET = require("./lib/socket/socket");
const WATCHER = require("./lib/daemon/watch");

/**
 * EXTRACT DATA FROM PRODEXPORT
 * 03/02/2018 PMONTOYA
 */

/**
 * Lancement du daemon pour scruter dossier daté.
 */
SOCKET.OPEN_SOCKET("tata");
WATCHER.WATCHER("Web2Web", "prodexport.xml");
