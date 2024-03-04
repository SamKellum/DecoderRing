// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const cipher = [];

  //helper function to determine if there are duplicates.
  function hasDuplicates(str) {
    const seen = {};
    for (let char of str) {
      if (seen[char]) return true;
      seen[char] = true;
    }
    return false;
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 || hasDuplicates(alphabet)) return false;
        //return false for duplicates, not 26, or no alphabet input

    alphabet.split("");
    if (encode) {
      for (let i = 0; i < 26; i++) {
        cipher[standardAlphabet[i]] = alphabet[i];
      }
    } else {
      for (let i = 0; i < 26; i++) {
        cipher[alphabet[i]] = standardAlphabet[i];
      }
    }

    let answer = input.toLowerCase().split("").map((letter) => {
      if (letter === " ") return " ";
      return cipher[letter];
    });

    return answer.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };