// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// -----Solution 2----
function steps(n, row = 0, stair = "") {
  if (row === n) {
    return;
  }

  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }

  return steps(n, row, stair);
}

// -----Solution----1

// function steps(n) {
//   for (var x = 1; x <= n; x++) {
//     let stair = "";

//     for (var y = 1; y <= n; y++) {
//       if (y <= x) {
//         stair += "#";
//       } else {
//         stair += " ";
//       }
//     }

//     console.log(stair);
//   }
// }

module.exports = steps;
