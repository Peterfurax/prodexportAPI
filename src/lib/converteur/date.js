const moment = require("moment");
/**
 *
 * @param {unixDate} unixDate
 */
const unixDateToHuman = unixDate => {
  return moment.unix(unixDate).format("DD-MM-YYYY");
};

const unixTimeToHuman = unixDate => {
  return moment.unix(unixDate).format("HH:mm:ss");
};

module.exports = {
  unixDateToHuman: unixDateToHuman,
  unixTimeToHuman: unixTimeToHuman
};
