function threeUniqueVowels(string) {
    var vowels = 'aeiou'.split('');
    var count = 0;

    for (var i = 0; i < vowels.length; i += 1) {
        var vowel = vowels[i];
        if (string.indexOf(vowel) > -1) {
            count += 1;
        }
    }
    return (count >= 3);
}

console.log(threeUniqueVowels('delicious')); // => true
console.log(threeUniqueVowels('bootcamp prep')); // => true
console.log(threeUniqueVowels('bootcamp')); // => false
console.log(threeUniqueVowels('dog')); // => false
console.log(threeUniqueVowels('go home')); // => false