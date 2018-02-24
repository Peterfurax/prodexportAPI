const date = require("../../../src/lib/converteur/date");
describe("Date Converter", () => {
  it("DateNowFile", () => {
    expect(date.DateNowFile()).to.have.lengthOf(8);
  });
  it("DateConvertFromQM", () => {
    expect(date.DateConvertFromQM(20180112152501)).equal("12-01-2018 15:25:01");
  });
  it("unixDateToHuman", () => {
    expect(date.unixDateToHuman(1518631181)).equal("14-02-2018");
  });
  it("unixTimeToHuman", () => {
    expect(date.unixTimeToHuman(1518631181)).equal("18:59:41");
  });
});
