function maxAdjacentSum(array) {
    var max = null;

    for (var i = 0; i < array.length - 1; i += 1) {
        var num1 = array[i];
        var num2 = array[i + 1];
        var total = num1 + num2;
        if (max < total || max === null) {
            max = total;
        }
    }
    return max;
}

var arr1 = [5, 6, 11, 3];
console.log(maxAdjacentSum(arr1)); // => 17
var arr2 = [3, 2, 13, 5, 4, 7];
console.log(maxAdjacentSum(arr2)); // => 18