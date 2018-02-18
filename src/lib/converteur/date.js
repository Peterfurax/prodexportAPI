const moment = require("moment"); // https://momentjs.com/docs/
/**
 * Convert date now to file pattern
 *
 * @return {string} "DDMMYYYY_HHmmss"
 */
const DateNowFile = () => {
  return moment().format("YYYYMMDD");
};

/**
 * Convert date now for fileName
 *
 * @return {string} "DD-MM-YYYY HH:mm:ss"
 */
const DateNow = () => {
  return moment().format("DD-MM-YYYY HH:mm:ss:SS");
};

/**
 * Convert unix date to human date
 * @param {number} unixDate
 * @return {string} "DD-MM-YYYY"
 */
const unixDateToHuman = unixDate => {
  return moment.unix(unixDate).format("DD-MM-YYYY");
};

/**
 * Convert unix time to human time
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
