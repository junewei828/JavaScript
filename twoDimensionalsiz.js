function twoDimensionalSize(array) {
    var size = 0;
    for (var i = 0; i < array.length; i += 1) {
        size += array[i].length;
    }
    return size;
}

var arr1 = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9]
];

console.log(twoDimensionalSize(arr1)); // => 9

var arr2 = [
  ['a'],
  ['b', 'c', 'd', 'e']
];

console.log(twoDimensionalSize(arr2)); // => 5