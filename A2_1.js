/*******************************************************************************
Write a function reverseRange(start, end) that returns an array that contains all
numbers between 'start' and 'end' (exclusive) in reverse-sequential order. Use a
loop to do this.

Examples:

reverseRange(2,7) => [6, 5, 4, 3]
reverseRange(4,2) => []
*******************************************************************************/

function reverseRange(start, end) {
    var result = [];

    for (var i = end - 1; i > start; i--) {
        result.push(i);
    }

    return result;
} 

console.log(reverseRange(2,7)); // => [6, 5, 4, 3]
console.log(reverseRange(4,2)); //=> []