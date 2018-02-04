/**
 * EXTRACT DATA FROM PRODEXPORT
 * 03/02/2018 PMONTOYA
 */


/**
 * Lancement du daemon pour scruter dossier daté.
 */
require('./lib/socket/socket').OPEN_SOCKET("tata")
require('./lib/daemon/watch').SNIFF('Web2Web','prodexport.xml')
