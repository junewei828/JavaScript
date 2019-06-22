function isSorted(array) {
    for (var i = 0; i < array.length; i += 1) {
        var el = array[i];
        if (array[i + 1] < el) {
            return false;
        }
    }
    return true;
}

console.log(isSorted([3, 5, 11, 9, 15, 16])); // => false
console.log(isSorted([3, 5, 11, 13, 15, 16])); // => true
console.log(isSorted([9, 4, 1, 5, 6, 2])); // => false
console.log(isSorted([1, 2, 4, 5, 6, 9])); // => true