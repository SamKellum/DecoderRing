// Write your tests here!
const { expect } = require("chai");
const caesarModule = require("../src/caesar");

describe("caesar", () => {
  it("should return message decoded by shift value", () => {
        const actual = caesarModule.caesar("bpqa qa i amkzmb umaaiom!", 8, false);
    const expected = "this is a secret message!"; 
        expect(actual).to.eql(expected);
  });
  it("should return encoded by shift value", () => {
        const actual = caesarModule.caesar("This is a secret message!", 8);
    const expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.eql(expected);
  });
   it("should leave spaces", () => {
        const actual = caesarModule.caesar("abc !", 8);
        const expected = " "
        expect(actual.charAt(3)).to.equal(expected);
    });
    it("should leave special characters", () => {
        const actual = caesarModule.caesar("abc !", 8);
        const expected = "!"
        expect(actual.charAt(4)).to.equal(expected);
    });
    it("should wrap characters around the alphabet", () => {
        const actual = caesarModule.caesar("zebra", 4);
      const expected = "difve";
        expect(actual).to.equal(expected);
    });
  it("should ignore capitalization", () => {
    const actual = caesarModule.caesar("Hello", 2);
    const expected = "jgnnq";
    expect(actual).to.eql(expected);
  });
  it("should return false, if no shift is given", () => {
    const actual = caesarModule.caesar("Nothing");
    expect(actual).to.be.false;
    it("should return false if  shift is greater than 25", () => {
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 100);
        expect(actual).to.be.false; 
    });
    it("should return false if shift is less than -25", () => {
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", -100);
        expect(actual).to.be.false; 
    });
    it("should return false if the shift is 0", () => {
        const actual = caesarModule.caesar("BPQA qa I amkzmb umaaiom!", 0);
        expect(actual).to.be.false; 
    });
  });
});