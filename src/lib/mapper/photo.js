/**
 * Provides modules to map data to csv field phto
 * @module Mapper
 * @class  csv Mapper
 */
const dateConverter = require("../converteur/date");
/**
 * @method DbMetadataMetadataSys
 * @description extrait les metadadonnées sys
 * @param {object} sys
 * @return {object}
 */
const phoDbMetadataMetadataSys = sys => {
  let props = sys.props[0];
  let productInfo = props.productInfo[0];
  let va = sys.va[0];
  return {
    loid: "loid" in sys ? sys.loid[0] : "",
    uuid: "uuid" in sys ? sys.uuid[0] : "",
    type: "type" in sys ? sys.type[0] : "",
    path: "path" in sys ? sys.path[0] : "",
    dateCreated:
      "timeCreated" in sys
        ? dateConverter.unixDateToHuman(sys.timeCreated[0])
        : "",
    timeCreated:
      "timeCreated" in sys
        ? dateConverter.unixTimeToHuman(sys.timeCreated[0])
        : "",
    dateModified:
      "timeModified" in sys
        ? dateConverter.unixDateToHuman(sys.timeModified[0])
        : "",
    timeModified:
      "timeModified" in sys
        ? dateConverter.unixTimeToHuman(sys.timeModified[0])
        : "",
    statusName: "statusName" in sys ? sys.statusName[0] : "",
    size: "size" in sys ? sys.size[0] : "",
    name: "name" in sys ? sys.name[0] : "",
    owner: "owner" in sys ? sys.owner[0] : "",
    creator: "creator" in sys ? sys.creator[0] : "",
    productname: "name" in productInfo ? productInfo.name[0] : "",
    issueDate: "issueDate" in productInfo ? productInfo.issueDate[0] : "",
    cteam: "cteam" in va ? va.cteam[0] : ""
  };
};

/**
 * @method phoDbMetadata
 * @description extrait les metadadonnées phoDbMetadata
 * @param {object} metadata
 * @return {object}
 */
const phoDbMetadata = metadata => {
  let sys = "sys" in metadata ? phoDbMetadataMetadataSys(metadata.sys[0]) : "";
  return sys;
};

const extractPho = docs => {
  // console.log(docs)
  docs.map(doc=>{
    let metadataExtract =
    "dbMetadata" in doc ? phoDbMetadata(doc.dbMetadata[0]) : {};
    console.log(metadataExtract)

  })



//   let metadataExtract =
//     "dbMetadata" in doc ? docDbMetadata(doc.dbMetadata[0]) : {};
//   let compoundUserMetadata =
//     "compoundUserMetadata" in doc.dbMetadata[0]
//       ? compoundUserMetadataExtract(
//           doc.dbMetadata[0].compoundUserMetadata[0].Metadata[0]
//         )
//       : compoundUserMetadataExtract();
//   return Object.assign(metadataExtract, compoundUserMetadata);
};

module.exports = {
  extractPho: extractPho
};
