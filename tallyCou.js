// Write a function tallyCount(array) that takes in an array of strings. 
// The function should return an object containing a tally count of the strings 
// in the array.
//
// Examples:
//
// var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
// tallyCount(arr1); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }
//
// var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
// tallyCount(arr2); // => { x: 'III', y: 'II', z: 'I' }


function tallyCount(array) {
    var tallyObj = {};
    for (var i = 0; i < array.length; i += 1) {
        var k = array[i];

        if (tallyObj[k] === undefined) {
            tallyObj[k] = 'I';
        } else {
            tallyObj[k] += 'I';
        }
    }
    return tallyObj;
}

var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
console.log(tallyCount(arr1)); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }
var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
console.log(tallyCount(arr2)); // => { x: 'III', y: 'II', z: 'I' }