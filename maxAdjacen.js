function maxAdjacentSum(arr) {
    var max = null;
    for (var i = 0; i < arr.length - 1; i += 1) {
        var num1 = arr[i];
        var num2 = arr[i + 1];
        var sum = num1 + num2;
        if (max === null || sum > max) {
            max = sum;
        }
    }
    return max;
}

var arr1 = [5, 6, 11, 3];
console.log(maxAdjacentSum(arr1)); // => 17
var arr2 = [3, 2, 13, 5, 4, 7];
console.log(maxAdjacentSum(arr2)); // => 18