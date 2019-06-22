// var arr1 = [3, 2, 11, 4, 7, 9];
// opposingSums(arr1); // => [ 12, 9, 15 ]
//
// var arr2 = [1, 2, 3, 4]
// opposingSums(arr2); // => [ 5, 5 ]

function opposingSums(array) {
    var result = [];
    for (var i = 0; i < array.length / 2; i += 1) {
        var num1 = array[i];
        var num2 = array[array.length - 1 - i];
        var sum = num1 + num2;
        result.push(sum);
    }

    return result;
}
var arr1 = [3, 2, 11, 4, 7, 9];
console.log(opposingSums(arr1)); // => [ 12, 9, 15 ]
var arr2 = [1, 2, 3, 4]
console.log(opposingSums(arr2)); // => [ 5, 5 ]
