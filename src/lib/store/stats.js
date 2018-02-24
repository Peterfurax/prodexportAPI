/**
 * Provides modules STORE stats
 * @module STORE
 * @class  STORE stats
 */

/**
* stockage des statistiques d'import et de lancement du serveur. 
* @property statsCount
* @type {Object}
* @default { dateLoading: "",  isManual: false,  FolderCount: 0,  prodexportCount: 0,  exportCount: 0,  loidList:[]}
*/
let statsCount = {
  dateLoading: "", //date valide apres un node ./serveur $date
  isManual: false, // true apres un node ./serveur $date
  FolderCount: 0, // Nombre de dossiers decouvert et surveiller
  prodexportCount: 0, //Nombre de dossiers valides
  exportCount: 0, //Nombre de export extrait
  loidList:[] //liste des LoidId article extrait
};

module.exports = {
  statsCount: statsCount
};
