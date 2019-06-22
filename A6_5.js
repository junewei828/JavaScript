function disemvowel(string) {
    var vowels = 'aeiouAEIOU';
    var newString = '';

    for (var i = 0; i < string.length; i += 1) {
        if (vowels.indexOf(string[i]) === -1) {
            newString += string[i];
        }
    }

    return newString;
}

console.log(disemvowel('bootcamp')); // => 'btcmp'
console.log(disemvowel('PREP')); // => 'PRP'
console.log(disemvowel('hello world')); // => 'hll wrld'