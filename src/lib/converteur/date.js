/**
 * Provides modules CONVERTER date
 * @module CONVERTER
 * @class CONVERTER date
 */
const moment = require("moment"); // https://momentjs.com/docs/

/**
 * @method DateNowFile
 * @description dateNow au format "YYYYMMDD"
 * @return {string} "20010131"
 */
const DateNowFile = () => {
  return moment().format("YYYYMMDD");
};

/**
 * @method DateNow
 * @description dateNow au format "DD-MM-YYYY HH:mm:ss"
 * @return {string} "31-01-2001 24:00:00:000"
 */
const DateNow = () => {
  return moment().format("DD-MM-YYYY HH:mm:ss:SS");
};

/**
 * @method DateConvertFromQM
 * @description Convertie date venant de la quickmeta "YYYYMMDDHHmmss" -> "DD-MM-YYYY HH:mm:ss"
 * @return {string} "31-01-2001 24:00:00"
 */
const DateConvertFromQM = dateQm => {
  return moment(dateQm, "YYYYMMDDHHmmss").format("DD-MM-YYYY HH:mm:ss");
};

/**
 * @method unixDateToHuman
 * @description Convert unix date to human date "DD-MM-YYYY"
 * @param {number} unixDate
 * @return {string} "31-00-2001"
 */
const unixDateToHuman = unixDate => {
  return moment.unix(unixDate).format("DD-MM-YYYY");
};

/**
 * @method unixTimeToHuman
 * @description Convert unix time to human time "HH:mm:ss"
 * @param {number} unixDate
 * @return {string} "24:00:00"
 */
const unixTimeToHuman = unixDate => {
  return moment.unix(unixDate).format("HH:mm:ss");
};

const utcToLocalHeure = utcDate => {
  return moment
    .utc(utcDate)
    .local()
    .format("HH:mm:ss");
};

const utcToLocalDate = utcDate => {
  return moment
    .utc(utcDate)
    .local()
    .format("YYYY-MM-DD");
};

module.exports = {
  unixDateToHuman: unixDateToHuman,
  unixTimeToHuman: unixTimeToHuman,
  DateNow: DateNow,
  DateNowFile: DateNowFile,
  DateConvertFromQM: DateConvertFromQM,
  utcToLocalHeure: utcToLocalHeure,
  utcToLocalDate: utcToLocalDate
};
