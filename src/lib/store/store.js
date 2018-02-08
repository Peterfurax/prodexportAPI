let ARR = { response: [] };

TRAITE_META = meta => {
  let data = meta[0];
  // console.log(data)
};

TEST_FILES = file => {
  if (require('path').extname(file) === '.JPEG') return 'JPEG';
  if (require('path').extname(file) === '.XML') return 'XML';
};

TRAITE_GRAPHIQUE = file => {
  // console.log(file);
  Promise.all([EXTRACT_CORRELATION_GRAPHIQUE(file.correlations), EXTRACT_DBMETADATA_GRAPHIQUE(file.dbMetadata)])
    .then(result => {
      console.log(result[0].correlation);
    })
    .catch(err => {
      // console.log(err);
    });
};

// EXTRACT_CORRELATION = (file) => {
//   let arr_correlation = []
//   return new Promise((resolve, reject) => {
//     if (!file) reject('pas de fichier ???')
//     for (var i = 0; i < file.correlations.length; i++) {
//       //TODO gerer plus de correlation
//       arr_correlation.push(file.correlations[i].correlation[0].$.obj)
//     }
//     resolve(arr_correlation)
//   });
// }

EXTRACT_CORRELATION_GRAPHIQUE = file => {
  let arr_correlation = [];
  return new Promise((resolve, reject) => {
    if (!file) reject('pas de fichier ???');
    for (var i = 0; i < file.length; i++) {
      //TODO gerer plus de correlation
      arr_correlation.correlation = file[i].correlation[0].$.obj;
    }
    resolve(arr_correlation);
  });
};

TRAITE_DOCUMENT = doc => {
  // console.log(doc);
  console.log('====================== XML DOCUMENT ===================');
};

EXTRACT_DBMETADATA_GRAPHIQUE = data => {
  return new Promise((resolve, reject) => {
    if (data.length < 1) {
      reject('pas de fichiers');
    } else {
      // console.log('meta', data);
      resolve(data);
    }
  });
};

TRAITE_DATA = ArrFichiers => {
  let arr = [];
  let fileList = ArrFichiers.data;
  for (var i = 0; i < fileList.length; i++) {
    if (TEST_FILES(fileList[i].$.href) === 'JPEG') {
      // TRAITE_GRAPHIQUE(fileList[i]);
    } else {
      // TRAITE_DOCUMENT(fileList[i]);
    }
  }
};

EXTRACT_DATA = (datedExport, id, data) => {
  let objResult = {};
  objResult.datedExport = datedExport;
  objResult.id = id;
  objResult.files = {};
  objResult.files.graph = [];
  objResult.files.doc = [];
  EXTRACT_FILES(data.prodexport.file)
    .catch(err => console.err(err))
    .then(fileList => {
      for (var i = 0; i < fileList.length; i++) {
        if (TEST_FILES(fileList[i].$.href) === 'JPEG') {
          objResult.files.graph.push(fileList[i]);

          // TRAITE_GRAPHIQUE(fileList[i]);
        } else {
          objResult.files.doc.push(fileList[i]);
          // TRAITE_DOCUMENT(fileList[i]);
        }
      }
      // objResult.data = result;
      // console.log(objResult);
      ARR.response.push(objResult);
      // TRAITE_DATA(arrResult);
    });
};

EXTRACT_FILES = data => {
  return new Promise((resolve, reject) => {
    if (data.length < 1) {
      reject('pas de fichiers');
    } else {
      console.log(data.length + ' FICHIERS A EXPORTER');
      resolve(data);
    }
  });
};

b = () => {};

module.exports = {
  EXTRACT_DATA: EXTRACT_DATA,
  EXTRACT_FILES: EXTRACT_FILES,
  ARR: ARR
};

// testValue(result, "result.prodexport.file[1]")
// actions.TRAITE_JSON_FROM_XML(result.prodexport.file[1])
// console.log(1, result.prodexport.file[1])
// console.log(2, result.prodexport.file[1].dbMetadata[0])

// console.log(3, result.prodexport.file[1].dbMetadata[0].compoundUserMetadata[0])
// console.log(4, result.prodexport.file[1].dbMetadata[0].compoundUserMetadata[0].Metadata[0])
// console.log(5, result.prodexport.file[1].dbMetadata[0].compoundUserMetadata[0].Metadata[0].Customer[0])
// console.log(6, result.prodexport.file[1].dbMetadata[0].compoundUserMetadata[0].Metadata[0].Customer[0].Web[0])
// console.log(7, result.prodexport.file[1].dbMetadata[0].compoundUserMetadata[0].Metadata[0].Customer[0].Web[0].WebCategory[0].WebTheme[0])
// console.log(8, result.prodexport.file[1].dbMetadata[0].compoundUserMetadata[0].Metadata[0].Customer[0].Web[0].WebCategory[0].WebTheme[0].WebName)

// // WebName
// if (result.prodexport.file[1].dbMetadata[0].compoundUserMetadata[0].Metadata[0].Customer[0].Web[0].WebCategory[0].WebTheme[0].WebName)
//   ARR.WebName = result.prodexport.file[1].dbMetadata[0].compoundUserMetadata[0].Metadata[0].Customer[0].Web[0].WebCategory[0].WebTheme[0].WebName[0]
// // WebName
// if (result.prodexport.file[1].dbMetadata[0].compoundUserMetadata[0].Metadata[0].Customer[0].Web[0].WebCategory[0].WebSousTheme[0].WebName)
//   ARR.WebName = result.prodexport.file[1].dbMetadata[0].compoundUserMetadata[0].Metadata[0].Customer[0].Web[0].WebCategory[0].WebSousTheme[0].WebName[0]
// // isWebFolder
// if (result.prodexport.file[1].dbMetadata[0].compoundUserMetadata[0].Metadata[0].Customer[0].isWebFolder)
//   ARR.isWebFolder = result.prodexport.file[1].dbMetadata[0].compoundUserMetadata[0].Metadata[0].Customer[0].isWebFolder[0]
// // loid
// if (result.prodexport.file[1].dbMetadata[0].sys[0].loid) ARR.loid = result.prodexport.file[1].dbMetadata[0].sys[0].loid[0]
// // uui
// // if (result.prodexport.file[1].dbMetadata[0].sys[0].uuid) ARR.uuid = result.prodexport.file[1].dbMetadata[0].sys[0].uui[0]
// // path
// if (result.prodexport.file[1].dbMetadata[0].sys[0].path) ARR.path = result.prodexport.file[1].dbMetadata[0].sys[0].path[0]
// // type
// if (result.prodexport.file[1].dbMetadata[0].sys[0].type) ARR.type = result.prodexport.file[1].dbMetadata[0].sys[0].type[0]
// // path
// if (result.prodexport.file[1].dbMetadata[0].sys[0].path) ARR.path = result.prodexport.file[1].dbMetadata[0].sys[0].path[0]
// // timeCreated
// if (result.prodexport.file[1].dbMetadata[0].sys[0].timeCreated) ARR.timeCreated = result.prodexport.file[1].dbMetadata[0].sys[0].timeCreated[0]
// // timeModified
// if (result.prodexport.file[1].dbMetadata[0].sys[0].timeModified) ARR.timeModified = result.prodexport.file[1].dbMetadata[0].sys[0].timeModified[0]
// // statusName
// if (result.prodexport.file[1].dbMetadata[0].sys[0].statusName) ARR.statusName = result.prodexport.file[1].dbMetadata[0].sys[0].statusName[0]
// // size
// if (result.prodexport.file[1].dbMetadata[0].sys[0].size) ARR.size = result.prodexport.file[1].dbMetadata[0].sys[0].size[0]
// // name
// if (result.prodexport.file[1].dbMetadata[0].sys[0].name) ARR.name = result.prodexport.file[1].dbMetadata[0].sys[0].name[0]
// // owner
// if (result.prodexport.file[1].dbMetadata[0].sys[0].owner) ARR.owner = result.prodexport.file[1].dbMetadata[0].sys[0].owner[0]
// // creator
// if (result.prodexport.file[1].dbMetadata[0].sys[0].creator) ARR.creator = result.prodexport.file[1].dbMetadata[0].sys[0].creator[0]
// // name
// if (result.prodexport.file[1].dbMetadata[0].sys[0].props[0].productInfo[0].name) ARR.name = result.prodexport.file[1].dbMetadata[0].sys[0].props[0].productInfo[0].name[0]
// // issueDate
// if (result.prodexport.file[1].dbMetadata[0].sys[0].props[0].productInfo[0].issueDate)
//   ARR.issueDate = result.prodexport.file[1].dbMetadata[0].sys[0].props[0].productInfo[0].issueDate[0]
// // templateName
// if (result.prodexport.file[1].dbMetadata[0].sys[0].props[0].templateName) ARR.templateName = result.prodexport.file[1].dbMetadata[0].sys[0].props[0].templateName[0]
// // summary
// if (result.prodexport.file[1].dbMetadata[0].sys[0].props[0].summary) ARR.summary = result.prodexport.file[1].dbMetadata[0].sys[0].props[0].summary[0]
// // summary
// if (result.prodexport.file[1].dbMetadata[0].sys[0].props[0].charsCount) ARR.charsCount = result.prodexport.file[1].dbMetadata[0].sys[0].props[0].summary[0]
// // wordCount
// if (result.prodexport.file[1].dbMetadata[0].sys[0].props[0].wordCount) ARR.wordCount = result.prodexport.file[1].dbMetadata[0].sys[0].props[0].wordCount[0]
// // workFolder
// if (result.prodexport.file[1].dbMetadata[0].sys[0].props[0].workFolder) ARR.workFolder = result.prodexport.file[1].dbMetadata[0].sys[0].props[0].workFolder[0]
// // cteam
// if (result.prodexport.file[1].dbMetadata[0].sys[0].va[0].cteam) ARR.cteam = result.prodexport.file[1].dbMetadata[0].sys[0].va[0].cteam[0]
