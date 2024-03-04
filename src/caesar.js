const caesarModule = (function () {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    if (shift < -25 || shift > 25 || shift === 0 || shift === undefined) {
      return false;
    }

    let result = "";

    // If encode is false, that means we are decoding.
    if (!encode) {
      shift = shift * -1;
    }

    // Convert the input string to an array of characters and iterate over each character
    input.split('').forEach((char) => {
      const letter = char.toLowerCase();

      if (letters.includes(letter)) {
        const letterIndex = letters.indexOf(letter);
        let shiftedIndex = letterIndex + shift;

        if (shiftedIndex > 25) {
          shiftedIndex -= 26;
        }
        if (shiftedIndex < 0 && shiftedIndex > -25) {
          shiftedIndex += 26;
        }
        const shiftedLetter = letters[shiftedIndex];
        result += shiftedLetter;
      } else {
        result += letter;
      }
    });

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };