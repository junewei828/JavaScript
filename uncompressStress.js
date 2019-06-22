function uncompressString(str) {
    var newStr = '';

    for (var i = 0; i < str.length - 1; i += 2) {
        var el = str[i];
        var num = Number(str[i + 1]);
        
        for (var j = 0; j < num; j += 1) {
            newStr += el;
        }
    } return newStr;        
}

console.log(uncompressString('a2b4c1')); // => 'aabbbbc'
console.log(uncompressString('b1o2t1')); // => 'boot'
console.log(uncompressString('x3y1x2z4')); // => 'xxxyxxzzzz'