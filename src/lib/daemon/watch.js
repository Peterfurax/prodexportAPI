SNIFF = (datingFolder, fileToWatch) => {
  require('chokidar').watch(datingFolder, {
      ignored: /(^|[\/\\])\../,
      persistent: true
    })
    .on('add', URI => {
      if (require('path').basename(URI) === fileToWatch) require('../actions/actions').XML_TO_JSON(URI)
    })
}
module.exports = {
  SNIFF: SNIFF
}
