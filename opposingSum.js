function opposingSums(array) {
    var newArray = [];

    for (var i = 0; i < array.length / 2; i += 1) {
        var el1 = array[i];
        var el2 = array[array.length - i - 1];
        var newEl = el1 + el2;
        newArray.push(newEl);
    }
    return newArray;
}

var arr1 = [3, 2, 11, 4, 7, 9];
console.log(opposingSums(arr1)); // => [ 12, 9, 15 ]
var arr2 = [1, 2, 3, 4]
console.log(opposingSums(arr2)); // => [ 5, 5 ]