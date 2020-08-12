// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let keyValueMap = {};

  for (var char of str) {
    keyValueMap[char] ? keyValueMap[char]++ : (keyValueMap[char] = 1);
  }

  let maxvalue = 0;
  let maxkey = "";

  // for iterating through the actual object we use "for in" loop as contrast to "for of" loop
  //  for numbers and strings

  for (const key in keyValueMap) {
    if (keyValueMap[key] > maxvalue) {
      maxvalue = keyValueMap[key];
      maxkey = key;
    }
  }
  return maxkey;
}

module.exports = maxChar;
