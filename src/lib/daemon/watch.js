let pathfinder = require('path')
let actions = require('../actions/actions')

SNIFF = (datingFolder, fileToWatch) => {
  require('chokidar').watch(datingFolder, {
      ignored: /(^|[\/\\])\../,
      persistent: true
    })
    .on('add', URI => {
      if (pathfinder.basename(URI) === fileToWatch) actions.XML_TO_JSON(URI)
    })
}
module.exports = {
  SNIFF: SNIFF
}
