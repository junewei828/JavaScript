function threeIncreasing(arr) {
    for (var i = 0; i < arr.length - 2; i += 1) {
        var el1 = arr[i];
        var el2 = arr[i + 1];
        var el3 = arr[i + 2];

        if (el1 + 1 === el2 && el2 + 1 === el3) {
            return true;
        } 
    }
    return false;
}

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4])); // => true
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6])); // => false