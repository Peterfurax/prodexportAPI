/**
 * Provides modules class...
 * @module Store
 * @class  csv Matpper
 */

const store = require("./store");
const convert = require("../actions/convert");
const dateConverter = require("../converteur/date");
// const data =  store.webProdexport;
// const sdvDateFormat = 'YYYYMMDDHHmmss';
// momentDate.utc().format(sdvDateFormat)
const MAPPING_TO_CSV = () => {
  console.log("MAPPING_TO_CSV");
  return new Promise((resolve, reject) => {
    let docs = [];
    // TODO gerer les dates
    // momentDate.utc().format(sdvDateFormat)
    store.webProdexport.response.map(val => {
      // console.log(sys.loid[0])
      let doc = {};
      let file = val.files.doc[0];
      let metadata = file.dbMetadata[0];
      let sys = metadata.sys[0];
      let props = sys.props[0];
      let productInfo = props.productInfo[0];
      // let va = sys.va[0];
      doc.loid = sys.loid[0];
      // console.log(doc.loid, va.$)
      // console.log(doc.loid, va.cteam)
      doc.uuid = sys.uuid[0];
      doc.type = sys.type[0];
      doc.path = sys.path[0];
      doc.dateCreated = dateConverter.unixDateToHuman(sys.timeCreated[0]);
      doc.timeCreated = dateConverter.unixTimeToHuman(sys.timeCreated[0]);
      doc.dateModified = dateConverter.unixDateToHuman(sys.timeModified[0]);
      doc.timeModified = dateConverter.unixTimeToHuman(sys.timeModified[0]);
      doc.statusName = sys.statusName[0];
      doc.size = sys.size[0];
      doc.name = sys.name[0];
      doc.owner = sys.owner[0];
      doc.creator = sys.creator[0];
      doc.name = productInfo.name[0];
      doc.issueDate = productInfo.issueDate[0];
      doc.templateName = props.templateName[0];
      // doc.summary = props.summary[0];
      doc.charsCount = props.charsCount[0];
      doc.wordCount = props.wordCount[0];
      doc.workFolder = props.workFolder[0];
      // doc.cteam = va.cteam[0] ? va.cteam[0] : "null";
      docs.push(doc);
      convert
        .JSON_TO_CSV(docs)
        .then(val => {
          // console.log(val)
          resolve(val);
        })
        .catch(err => {
          if (err) console.log(err);
          reject(err);
        });
    });
  });
};

module.exports = {
  MAPPING_TO_CSV: MAPPING_TO_CSV
};
