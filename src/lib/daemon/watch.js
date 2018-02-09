let pathfinder = require('path')
let actions = require('../actions/actions')


/**
 * WATCHER
 *  watch datingFolder for file and load XML_TO_JSON when file match fileToWatch
 * @param {string} datingFolder 
 * @param {string} fileToWatch 
 */
let WATCHER = (datingFolder, fileToWatch) => {
  require('chokidar').watch(datingFolder, {
  ignored: /(^|[\/\\])\../,
  persistent: true
  })
    .on('add', URI => {
  if (pathfinder.basename(URI) === fileToWatch) actions.XML_TO_JSON(URI)
    })
}
module.exports = {
  WATCHER: WATCHER
}
