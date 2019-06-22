function threeInARow(arr) {
    for (var i = 0; i < arr.length - 2; i += 1) {
        var el = arr[i];
        var el1 = arr[i + 1];
        var el2 = arr[i + 2];
        if (el === el1 && el1 === el2) {
            return true;
        }
    }
    return false;
}

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8])); // => true;
console.log(threeInARow([10, 9, 20, 33, 3, 3])); // => false;