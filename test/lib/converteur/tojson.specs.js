const tojson = require("../../../src/lib/converteur/toJson");
// const tojson = require("../../data/20010131_WEB2WEB/3.3121321562/prodexport.xml");
describe("toJSon", () => {
  it("json id export extract", () => {
    expect(tojson.idExport("\\20180223_WEB2WEB\\3.3121321562\\prodexport.xml")).equal("3.3121321562");
  });
  it("json date export extract", () => {
    expect(tojson.datedExport("\\20180223_WEB2WEB\\3.3121321562\\prodexport.xml")).equal("20180223");
  });
  it("json date export extract", () => {
    expect(tojson.xmlToJSON("")).to.be.undefined;
  });
  // it("json date export extract", () => {
  //   expect(tojson.xmlToJSON("Web2Web/20010131_WEB2WEB/3.3121321562/prodexport.xml")).equal("20180223");
  // });
});
