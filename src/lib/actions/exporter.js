const csvMapper = require("../store/csvMapper");
const fileMan = require("../actions/fs");
const date = require("../converteur/date");
const EXPORT_CSV = () => {
  return new Promise((resolve, reject) => {
    console.log(date.DateNow(),"je lance export");
    csvMapper
      .MAPPING_TO_CSV()
      .then(val => {
        fileMan
          .WRITE_FILE_CSV(val)
          .then(filePath => {
            console.log(filePath);
            resolve("./" + filePath, filePath);
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        reject(err);
      });
  });
};

module.exports = { EXPORT_CSV: EXPORT_CSV };
