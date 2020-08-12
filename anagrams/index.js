// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// ------Solution 2

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// --------Solution 1
// function anagrams(stringA, stringB) {

//     const stringAHashMap = buildCharMap(stringA.replace(/[^\w]/g, '').toLowerCase());
//     const stringBHashMap = buildCharMap(stringB.replace(/[^\w]/g, '').toLowerCase());

//         if (Object.keys(stringAHashMap).length !== Object.keys(stringBHashMap).length) {
//           return false;
//     }

//     for (let key in stringAHashMap) {
//         if (stringAHashMap[key] !== stringBHashMap[key]) return false;
//     }

//     return true;

//  }

// function buildCharMap(anyString) {

//     const charMap = {};

//     for (const char of anyString) {
//         charMap[char] ? charMap[char]++ : charMap[char] = 1
//     }

//     return charMap;
// }

module.exports = anagrams;
