/**
 * Provides modules class...
 * @module Store
 * @class  csv Matpper
 */

const store = require("./store");
const convert = require("../actions/convert");
const dateConverter = require("../converteur/date");

const compoundUserMetadataGeneral = General => {
  return {
    DocDescr: "DocDescr" in General ? General.DocDescr[0] : "",
    DateCreated: "DateCreated" in General ? General.DateCreated[0] : "",
    DocAuthor: "DocAuthor" in General ? General.DocAuthor[0] : "",
    DocType: "DocType" in General ? General.DocType[0] : "",
    DocTitle: "DocTitle" in General ? General.DocTitle[0] : ""
  };
};

const compoundUserMetadataCustomer = Customer => {
  return {
    Authors: "Authors" in Customer ? Customer.Authors[0] : "",
    Product: "Product" in Customer ? Customer.Product[0] : "",
    Geographies: "Geographies" in Customer ? Customer.Geographies[0] : "",
    Companies: "Companies" in Customer ? Customer.Companies[0] : "",
    Keywords: "Keywords" in Customer ? Customer.Keywords[0] : "",
    SecondaryHeader:
      "SecondaryHeader" in Customer ? Customer.SecondaryHeader[0] : "",
    DocKeywordTheme: "Keywords" in Customer ? Customer.DocKeywordTheme[0] : "",
    DocTypology: "Keywords" in Customer ? Customer.DocTypology[0] : "",
    DocKeywordTools: "Keywords" in Customer ? Customer.DocKeywordTools[0] : "",
    Biographies: "Keywords" in Customer ? Customer.Biographies[0] : ""
  };
};

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

const compoundUserMetadataCustomerWeb = Web => {
  return {
    WebObjId: "WebObjId" in Web ? Web.WebObjId[0] : "",
    WebType: "WebType" in Web ? Web.WebType[0] : "",
    WebPriority: "WebPriority" in Web ? Web.WebPriority[0] : "",
    WebPublicationDate:
      "WebPublicationDate" in Web ? Web.WebPublicationDate[0] : "",
    WebRelegationDate:
      "WebRelegationDate" in Web ? Web.WebRelegationDate[0] : "",
    WebUnpublicationDate:
      "WebUnpublicationDate" in Web ? Web.WebUnpublicationDate[0] : "",
    WebDeletionDate: "WebDeletionDate" in Web ? Web.WebDeletionDate[0] : "",
    WebCategory: "WebCategory" in Web ? Web.WebCategory[0] : ""
  };
};

const compoundUserMetadataExtract = Metadata => {
  return Object.assign(
    compoundUserMetadataGeneral(Metadata.General[0]),
    compoundUserMetadataCustomer(Metadata.Customer[0]),
    compoundUserMetadataCustomerPrint(Metadata.Customer[0].Print[0]),
    compoundUserMetadataCustomerWeb(Metadata.Customer[0].Web[0])
  );
};

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
      let va = sys.va[0];
      let compoundUserMetadata =
        "compoundUserMetadata" in metadata
          ? compoundUserMetadataExtract(
            metadata.compoundUserMetadata[0].Metadata[0]
          )
          : null;
      console.log(compoundUserMetadata);
      doc.loid = sys.loid[0];
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
      doc.charsCount = props.charsCount[0];
      doc.wordCount = props.wordCount[0];
      doc.workFolder = props.workFolder[0];
      doc.cteam = "cteam" in va ? va.cteam[0] : null;
      // console.log(MetadataCompound);
      docs.push(doc);
      convert
        .JsonToCSV(docs)
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
