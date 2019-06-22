function hasSymmetry(array) {
    for (var i = 0; i < array.length; i += 1) {
        if (array[i] !== array[array.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(hasSymmetry([1, 2, 3, 3, 2, 1])); //=> true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])); //=> false