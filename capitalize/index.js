// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// -------Solution 2
function capitalize(str) {
    let result = str[0].toUpperCase();
    
    for (let char = 1; char < str.length; char++) {
        if (str[char - 1] === ' ') {
        result = result + str[char].toUpperCase();
        }

        else {
            result = result + str[char];
        }
    }

    return result;

}





// ------Solution 1
// function capitalize(str) {
    
//     const arr = [];

//     for (let item of str.split(' ')) {
//         arr.push(item[0].toUpperCase() + item.slice(1));    
//     }

//     return arr.join(' ');
// }



module.exports = capitalize;
