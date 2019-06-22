/*******************************************************************************
Write a function mySelect(arr, cb) that accepts an array and a callback.
It should pass the callback every element, its corresponding index, and the array
itself. Returns an array containing all elements of `arr` for which the given callback
returns a truthy value.

Examples:

function isUpper(str) {
  return str.toUpperCase() === str;
}

function isEven(n) {
  return n % 2 === 0;
}

var result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
result1; // => [ 'BOOTCAMP', 'COOL' ]

var result2 = mySelect([1, 2, 4, 7, 8], isEven);
result2; // => [ 2, 4, 8 ]
*******************************************************************************/

function mySelect(arr,cb) {
    var result = [];

    for (var i = 0; i < arr.length; i += 1) {
        if (cb(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function isUpper(str) {
    return str.toUpperCase() === str;
  }
  
  function isEven(n) {
    return n % 2 === 0;
  }
  
  var result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
  console.log(result1); // => [ 'BOOTCAMP', 'COOL' ]
  
  var result2 = mySelect([1, 2, 4, 7, 8], isEven);
  console.log(result2); // => [ 2, 4, 8 ]