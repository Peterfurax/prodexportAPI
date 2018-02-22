const date = require("../date");
// const chai = require("chai");
// var expect = chai.expect;
describe("date", () => {
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
