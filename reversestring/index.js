// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 3
function reverse(str) {
  return str.split("").reduce((initial, element) => element + initial, "");
}

//----Solution 2
// function reverse(str) {
//     let reversed = '';

//     for(let c of str) {
//         reve rsed = c + reversed;
//     }

//     return reversed;
// }

//----Solution 1
// function reverse(reverse) {
//   return reverse.split("").reverse().join("");
// }

module.exports = reverse;
