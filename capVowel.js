function capVowels(string) {
    var vowels = 'aeiouAEIOU'.split('');
    var newStr = '';
    for (var i = 0; i < string.length; i += 1) {
        var char = string[i];
        if (vowels.indexOf(char) > -1) {
            newStr += char.toUpperCase();
        }
        else {
            newStr += char.toLowerCase();
        }
    }

    return newStr;
} 

console.log(capVowels('hello world')); // => 'hEllO wOrld'
console.log(capVowels('HELLO WORLD')); // => 'hEllO wOrld'
console.log(capVowels('boOtCamP PreP')); // => 'bOOtcAmp prEp'