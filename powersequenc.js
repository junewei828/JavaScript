function powerSequence(base,length) {
    var result = 1;
    var arr = [];

    for (var i = 0; i < length; i += 1) {
        result *= base;
        arr.push(result);
    }
    return arr;
}

console.log(powerSequence(3,4));
console.log(powerSequence(2, 6));
console.log(powerSequence(8,3));