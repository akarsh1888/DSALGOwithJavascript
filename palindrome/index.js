// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // every () returns true or false if it is true for every comparison

  return str.split("").every((element, index) => {
    return element === str[str.length - index - 1];
  });
}

// --Solution 1
// function palindrome(str) {
//    "akarsh" + "s" = "akarshs"
//   "s" + "akarsh" = "sakarsh"

//   return (
//     str.split("").reduce((initial, element) => element + initial, "") === str
//   );
// }

module.exports = palindrome;
