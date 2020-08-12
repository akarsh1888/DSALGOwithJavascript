// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//--------------- Solution 2
function chunk(array, size) {
  const result = [];
  var index = 0;

  while (index < array.length) {
    result.push(array.slice(index, index + size));
    index = index + size;
  }

  return result;
}

// -------------Solution 1
/*
function chunk(array, size) {
    var result = [];
    for (var x = 0; x < array.length; x++) {
        var chunk = [];
        var y = 1;
        
        while (y <= size && x < array.length) {
            chunk.push(array[x]);
            y++;
            x++;
        }
        
        x--;
        y = 1;
        result.push(chunk);
        chunk = [];
    }
    return result;
}
*/

//----------Solution 3
/*
function chunk(array, size) {
    var result = [];
    
    for (var x of array) 
    {
        var lastChunk = result[result.length - 1];
        if (!lastChunk || lastChunk.length === size) {
            result.push([x]);
        } else {
            lastChunk.push(x);
        }
    }
    return result;
}
*/

module.exports = chunk;
