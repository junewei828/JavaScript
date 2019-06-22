function twoDimensionalTotal(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i += 1) {
        var el = array[i];
        
        for (var j = 0; j < el.length; j += 1) {
            var val = el[j];
            sum += val; 
        }
    }

    return sum;
}

var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];  

console.log(twoDimensionalTotal(arr1)); // => 40

var arr2 = [
  [2],
  [1, 9],
  [1, 1, 1]
]

console.log(twoDimensionalTotal(arr2)); // => 15
