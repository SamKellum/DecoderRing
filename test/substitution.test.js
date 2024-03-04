// Write your tests here!
const { expect } = require("chai");
const substitutionModule = require("../src/substitution");

describe("substitution", () => {
  it("should ENCODE", () => {
        const actual = substitutionModule.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
         const expected = "jrufscpw";
        expect(actual).to.eql(expected);
  });  
  it("should DECODE", () => {
        const actual = substitutionModule.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
        expect(actual).to.eql(expected);
  });
  it("should allow spaces/ENCODE", () => {
        const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
          const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected);
  });  
  it("should allow spaces/DECODE", () => {
        const actual = substitutionModule.substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
       const expected = "you are an excellent spy";
        expect(actual).to.eql(expected);
  });
  it("should ignore capital letters", () => {
        const actual = substitutionModule.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
          const expected = "elp xhm xf mbymwwmfj dne";
        expect(actual).to.eql(expected);
  });
 it("should return false if alphabet doesnt equal 26", () => {
        const actual = substitutionModule.substitution("thinkful", "abc");
    expect(actual).to.be.false;
      });
  it("should return false if alphabet has duplicate characters", () => {
        const actual = substitutionModule.substitution("thinkful", "little");
    expect(actual).to.be.false;
  });
  
  


});