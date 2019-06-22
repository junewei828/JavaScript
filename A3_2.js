/*******************************************************************************
Write a function `minMaxDifference(array)` that return the difference between the
largest value and the smallest value in the array. Assume `array` is an array of
numbers. Assume an array of at least two numbers.

Examples:

minMaxDifference([1,2,3,4,5]) => 4
minMaxDifference([5,4,3,2,1]) => 4
minMaxDifference([4,2,5,1,-5]) => 10
*******************************************************************************/

function minMaxDifference(array) {
    var min = null;
    var max = null;

    for (var i = 0; i < array.length; i += 1) {
        var ele = array[i];

        if (min === null || ele < min) {
            min = ele;
        } 
        if (max === null || ele > max) {
            max = ele;
        }
    }

    return max - min;
}

console.log(minMaxDifference([1,2,3,4,5]));// => 4
console.log(minMaxDifference([5,4,3,2,1]));// => 4
console.log(minMaxDifference([4,2,5,1,-5])); // => 10