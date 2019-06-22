function twoDimensionalTotal(array) {
    var total = 0; 
    for (var i = 0; i < array.length; i += 1) {
        var subArray = array[i];
        for (var j = 0; j < subArray.length; j += 1) {
            total += subArray[j];
        }

    } 
    
    return total;
}

var arr1 = [
  [5, 2, 5, 3],
  [12, 13],
];  

console.log(twoDimensionalTotal(arr1)); // => 40