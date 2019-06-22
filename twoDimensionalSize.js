function twoDimensionalSize(array) {
    var arr = [];
    for (var num = 0; num < array.length; num += 1) {
        for (var i = 0; i < array[num].length; i +=  1) {
            arr.push(array[num][i]);
        }
    }
    return arr.length;
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