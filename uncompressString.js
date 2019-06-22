function uncompressString(str) {
    var uncompressed = '';

    for (var i = 0; i < str.length - 1; i += 2) {
        var num = Number(str[i + 1]);
        
        for (var j = 0; j < num; j += 1) {
            uncompressed += str[i];
        }
    }
    return uncompressed;
}

console.log(uncompressString('a2b4c1')); // => 'aabbbbc'
console.log(uncompressString('b1o2t1')); // => 'boot'
console.log(uncompressString('x3y1x2z4')); // => 'xxxyxxzzzz'