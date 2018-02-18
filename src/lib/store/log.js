// const fs = require("fs");
const l = (mess) => {
  console.log(mess);
};

// fs.appendFile("message.txt", "data to append", function(err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

module.exports = {
  l: l
};
