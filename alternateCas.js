function alternateCase(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i += 1) {
        var char = str[i];
        if (i % 2 === 0) {
            newStr += char.toUpperCase();
        } else {
            newStr += char.toLowerCase();
        }
    }
    return newStr;
}

console.log(alternateCase('BOOTCAMPPREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('bOotCamPpREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('hello')); // => 'HeLlO'