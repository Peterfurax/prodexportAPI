/**
 * Provides modules MAPPER article
 * @module MAPPER
 * @class  MAPPER article
 */
const dateConverter = require("../converteur/date");

/**
 * @method docDbMetadata
 * @description extrait les metadadonnées docDbMetadata
 * @param {object} metadata
 * @return {object}
 */
const docDbMetadata = metadata => {
  let sys = "sys" in metadata ? DbMetadataMetadataSys(metadata.sys[0]) : "";
  return sys;
};

/**
 * @method DbMetadataMetadataSys
 * @description extrait les metadadonnées sys
 * @param {object} sys
 * @return {object}
 */
const DbMetadataMetadataSys = sys => {
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
    templateName: "templateName" in props ? props.templateName[0] : "",
    charsCount: "charsCount" in props ? props.charsCount[0] : "",
    wordCount: "wordCount" in props ? props.wordCount[0] : "",
    workFolder: "workFolder" in props ? props.workFolder[0] : "",
    cteam: "cteam" in va ? va.cteam[0] : ""
  };
};

/**
 * @method compoundUserMetadataGeneral
 * @description extrait les metadadonnées General
 * @param {object} General
 * @return {object}
 */
const compoundUserMetadataGeneral = General => {
  return {
    DocDescr: "DocDescr" in General ? General.DocDescr[0] : "",
    DateCreated: "DateCreated" in General ? General.DateCreated[0] : "",
    DocAuthor: "DocAuthor" in General ? General.DocAuthor[0] : "",
    DocType: "DocType" in General ? General.DocType[0] : "",
    DocTitle: "DocTitle" in General ? General.DocTitle[0] : ""
  };
};

/**
 * @method compoundUserMetadataCustomer
 * @description extrait les metadadonnées Customer
 * @param {object} Customer
 * @return {object}
 */
const compoundUserMetadataCustomer = Customer => {
  return {
    Authors: "Authors" in Customer ? Customer.Authors[0] : "",
    Product: "Product" in Customer ? Customer.Product[0] : ""
    // Geographies: "Geographies" in Customer ? Customer.Geographies[0] : "",
    // Companies: "Companies" in Customer ? Customer.Companies[0] : "",
    // Keywords: "Keywords" in Customer ? Customer.Keywords[0] : "",
    // SecondaryHeader:
    //   "SecondaryHeader" in Customer ? Customer.SecondaryHeader[0] : "",
    // DocKeywordTheme: "Keywords" in Customer ? Customer.DocKeywordTheme[0] : "",
    // DocTypology: "Keywords" in Customer ? Customer.DocTypology[0] : "",
    // DocKeywordTools: "Keywords" in Customer ? Customer.DocKeywordTools[0] : "",
    // Biographies: "Keywords" in Customer ? Customer.Biographies[0] : ""
  };
};

/**
 * @method compoundUserMetadataCustomer
 * @description extrait les metadadonnées Print
 * @param {object} Print
 * @return {object}
 */
const compoundUserMetadataCustomerPrint = Print => {
  return {
    PrintDataType: "PrintDataType" in Print ? Print.PrintDataType[0] : "",
    PrintMedia: "PrintMedia" in Print ? Print.PrintMedia[0] : "",
    PrintMediaLabel: "PrintMediaLabel" in Print ? Print.PrintMediaLabel[0] : "",
    PrintSegment: "PrintSegment" in Print ? Print.PrintSegment[0] : "",
    PrintSousSegment:
      "PrintSousSegment" in Print ? Print.PrintSousSegment[0] : "",
    PrintTheme: "PrintTheme" in Print ? Print.PrintTheme[0] : "",
    PrintIssueNumber:
      "PrintIssueNumber" in Print ? Print.PrintIssueNumber[0] : "",
    PrintPageNumber: "PrintPageNumber" in Print ? Print.PrintPageNumber[0] : "",
    PrintSequenceNumber:
      "PrintSequenceNumber" in Print ? Print.PrintSequenceNumber[0] : "",
    PrintNextPageNumber:
      "PrintNextPageNumber" in Print ? Print.PrintNextPageNumber[0] : ""
  };
};

/**
 * @method compoundUserMetadataCustomerWebCategoryExtract
 * @description extrait les metadadonnées WebCategory
 * @param {object} WebCategory
 * @return {object}
 */
const compoundUserMetadataCustomerWebCategoryExtract = WebCategory => {
  return {
    WebSource:
      "WebCaption" in WebCategory.WebSource[0]
        ? WebCategory.WebSource[0].WebCaption[0]
        : "",
    WebSegment:
      "WebCaption" in WebCategory.WebSegment[0]
        ? WebCategory.WebSegment[0].WebCaption[0]
        : "",
    WebTheme:
      "WebCaption" in WebCategory.WebTheme[0]
        ? WebCategory.WebTheme[0].WebCaption[0]
        : ""
    // WebSousSegment:"WebCaption" in WebCategory.WebSousSegment[0] ? WebCategory.WebSousSegment[0].WebCaption[0]:""
  };
};
/**
 * @method compoundUserMetadataCustomerWeb
 * @description extrait les metadadonnées Web
 * @param {object} Web
 * @return {object}
 */
const compoundUserMetadataCustomerWeb = Web => {
  return {
    WebObjId: "WebObjId" in Web ? Web.WebObjId[0] : "",
    WebType: "WebType" in Web ? Web.WebType[0] : "",
    WebPriority: "WebPriority" in Web ? Web.WebPriority[0] : "",
    WebPublicationDate:
      "WebPublicationDate" in Web
        ? dateConverter.DateConvertFromQM(Web.WebPublicationDate[0])
        : "",
    WebRelegationDate:
      "WebRelegationDate" in Web
        ? dateConverter.DateConvertFromQM(Web.WebRelegationDate[0])
        : "",
    WebUnpublicationDate:
      "WebUnpublicationDate" in Web
        ? dateConverter.DateConvertFromQM(Web.WebUnpublicationDate[0])
        : "",
    WebDeletionDate:
      "WebDeletionDate" in Web
        ? dateConverter.DateConvertFromQM(Web.WebDeletionDate[0])
        : "",
    WebCategory:
      "WebCategory" in Web
        ? compoundUserMetadataCustomerWebCategoryExtract(Web.WebCategory[0])
        : ""
  };
};

/**
 * @method compoundUserMetadataExtract
 * @description extrait les metadadonnées Web
 * @param {object} Metadata
 * @return {object}
 */
const compoundUserMetadataExtract = Metadata => {
  return Object.assign(
    compoundUserMetadataGeneral(Metadata.General[0]),
    compoundUserMetadataCustomer(Metadata.Customer[0]),
    compoundUserMetadataCustomerPrint(Metadata.Customer[0].Print[0]),
    compoundUserMetadataCustomerWeb(Metadata.Customer[0].Web[0])
  );
};

const extractArt = doc => {
  console.log(doc)
  let metadataExtract =
    "dbMetadata" in doc ? docDbMetadata(doc.dbMetadata[0]) : {};
  let compoundUserMetadata =
    "compoundUserMetadata" in doc.dbMetadata[0]
      ? compoundUserMetadataExtract(
          doc.dbMetadata[0].compoundUserMetadata[0].Metadata[0]
        )
      : compoundUserMetadataExtract();
  return Object.assign(metadataExtract, compoundUserMetadata);
};

module.exports = {
  extractArt: extractArt
};
