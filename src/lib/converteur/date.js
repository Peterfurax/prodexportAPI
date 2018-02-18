/**
 * Provides modules class...
 * @module Converter
 * @class Converter date 
 */

const moment = require("moment"); // https://momentjs.com/docs/

/**
 * @public
 * @method DateNowFile
 * @description genere date now au format YYYYMMDD
 * @return {string} "20180131"
 */
const DateNowFile = () => {
  return moment().format("YYYYMMDD");
};

/**
 * @public
 * @method DateNow
 * @description Convertie date now
 * @return {string} "DD-MM-YYYY HH:mm:ss"
 */
const DateNow = () => {
  return moment().format("DD-MM-YYYY HH:mm:ss:SS");
};

/**
 * @public
 * @method unixDateToHuman
 * @description Convert unix date to human date
 * @param {number} unixDate
 * @return {string} "DD-MM-YYYY"
 */
const unixDateToHuman = unixDate => {
  return moment.unix(unixDate).format("DD-MM-YYYY");
};

/**
 * @public
 * @method unixDateToHuman
 * @description Convert unix time to human time
 * @param {number} unixDate
 * @return {string} "HH:mm:ss"
 */
const unixTimeToHuman = unixDate => {
  return moment.unix(unixDate).format("HH:mm:ss");
};

module.exports = {
  unixDateToHuman: unixDateToHuman,
  unixTimeToHuman: unixTimeToHuman,
  DateNow: DateNow,
  DateNowFile: DateNowFile
};
