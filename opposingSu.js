function opposingSums(array) {
    var newArr = [];

    for (var i = 0; i < array.length / 2; i += 1) {
        var sum = array[i] + array[array.length - 1 - i];
        newArr.push(sum);
    }
    return newArr;
}

var arr1 = [3, 2, 11, 4, 7, 9];
console.log(opposingSums(arr1)); // => [ 12, 9, 15 ]
var arr2 = [1, 2, 3, 4]
console.log(opposingSums(arr2)); // => [ 5, 5 ]