function powerSequence(base, length) {
    var array = [];
    var result = 1;
    for (var i = 1; i <= length; i += 1) {
        array.push(result *= base);
    }
    return array;
}
console.log(powerSequence(3, 4)); // => [ 3, 9, 27, 81 ])
console.log(powerSequence(2, 6)); // => [ 2, 4, 8, 16, 32, 64 ])
console.log(powerSequence(8, 3)); // => [ 8, 64, 512 ])