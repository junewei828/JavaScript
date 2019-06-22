function hasAllVowels(str) {
    vowels = 'aeiou'.split('');

    for (var i = 0; i < vowels.length; i += 1) {
        var vowel = vowels[i];
        if (str.indexOf(vowel) === -1) {
            return false;
        }
    }

    return true;
}

console.log(hasAllVowels('have you gone biking?'));
console.log(hasAllVowels('get out of the way, silly'));
console.log(hasAllVowels('bootcamp prep'));
console.log(hasAllVowels('hello world'));
