function maxAdjacentSum(array) {
    var sum = null;

    
    for (var i = 0; i < array.length - 1; i += 1) {
        var el1 = array[i];
        var el2 = array[i + 1];

        if (sum === null || el1 + el2 > sum) {
            sum = el1 + el2;
        }
    }
    return sum;
}

var arr1 = [5, 6, 11, 3];
console.log(maxAdjacentSum(arr1)); // => 17
var arr2 = [3, 2, 13, 5, 4, 7];
console.log(maxAdjacentSum(arr2)); // => 18