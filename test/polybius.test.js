// Write your tests here!
const { expect } = require("chai");
const polybiusModule = require("../src/polybius");

describe("polybius", () => {
   it("should encode  each letter to each pair of numbers", () => {
     const actual = polybiusModule.polybius("thinkful"); 
     const expected = "4432423352125413";
    expect(actual).to.eql(expected);
   });
   it("should return false if the number of characters in the string odd", () => {
    const actual = polybiusModule.polybius("2531875214896", false);
    expect(actual).to.be.false;
  });
it("should ignore capital letters", () => {
     const actual = polybiusModule.polybius("Hello world"); 
     const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  });
  it("should decode numbers into letter", () => {
    const actual = polybiusModule.polybius('525113135423', false);
    const expected = "kellum";
        expect(actual).to.equal(expected);
  });
    it("should leave the spaces when encoding", () => {
     const actual = polybiusModule.polybius("hello world"); 
     const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  });
  it("should leave the spaces when decoding", () => {
     const actual = polybiusModule.polybius("3251131343 2543241341", false); 
     const expected = "hello world";
    expect(actual).to.eql(expected);
  });

  it("should translate 42 to i/j when decoding", () => {
     const actual = polybiusModule.polybius("4432423352125413", false); 
     const expected = "th(i/j)nkful";
    expect(actual).to.eql(expected);
  });

  it("should translate i and j to 42 when encoding", () => {
     const actual = polybiusModule.polybius("jimmy"); 
     const expected = "4242232345";
    expect(actual).to.eql(expected);
  });
});