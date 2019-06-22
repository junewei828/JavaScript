function alternateCase(str) {
    var resultStr = '';
    for (var i = 0; i < str.length; i += 1) {
        var char = str[i];
        if (i % 2 === 0) {
            resultStr += char.toUpperCase();
        } else {
            resultStr += char.toLowerCase();
        }
    }
    return resultStr;
}
console.log(alternateCase('BOOTCAMPPREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('bOotCamPpREP')); // => 'BoOtCaMpPrEp'
console.log(alternateCase('hello')); // => 'HeLlO'
