function pairToString(arr) {
    var string = '';

    for (var i = 0; i < arr.length; i += 1) {
        string += printString(arr[i]);
    }
    return string;
}

function printString(arr) {
    var string = '';
    for (var i = 0; i < arr[1]; i += 1) {
        string += arr[0];
    }
    return string;
}


var array1 = [
  ['a', 3],
  ['b', 1],
  ['c', 2]
];

console.log(pairToString(array1)); // => 'aaabcc'

var array2 = [
  ['f', 1],
  ['o', 2],
  ['d', 1],
  ['!', 1]
];

console.log(pairToString(array2)); // => 'food!'