const polybiusModule = (function () {
  const encodeKey = {
    a: 11, b: 21, c: 31, d: 41, e: 51,
    f: 12, g: 22, h: 32, i: 42, j: 42, k: 52, 
    l: 13, m: 23, n: 33, o: 43, p: 53, 
    q: 14, r: 24, s: 34, t: 44, u: 54, 
    v: 15, w: 25, x: 35, y: 45, z: 55,
  }
  const decodeKey = {
    11: "a", 21: "b", 31: "c", 41: "d", 51: "e",
    12: "f", 22: "g", 32: "h", 42: "(i/j)", 52: "k",
    13: "l", 23: "m", 33: "n", 43: "o", 53: "p",
    14: "q", 24: "r", 34: "s", 44: "t", 54: "u",
    15: "v", 25: "w", 35: "x", 45: "y", 55: "z",
  }




  function polybius(input, encode = true) {
    // Convert input to lowercase
    input = input.toLowerCase();
    
    // Choose the appropriate key based on encoding/decoding
    const key = encode ? encodeKey : decodeKey;

    let result = '';

    if (encode) {
      // Encoding logic
      for (let char of input) {
        if (char === ' ') {
          result += ' ';
        } else {
          result += key[char] || '';
        }
      }
    } else {
      // Decoding logic
      const sections = input.split(' ');

      for (let section of sections) {
        if (section.length % 2 !== 0) {
          // Invalid (odd number of characters in a section)
          return false;
        }

        for (let i = 0; i < section.length; i += 2) {
          const code = section.slice(i, i + 2);
          result += key[code] || '';
        }

        // Add a space between sections
        result += ' ';
      }

      // Remove trailing space
      result = result.trim();
    }

    return result;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };