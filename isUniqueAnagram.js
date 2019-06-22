function isUniqueAnagram(word1, word2) {
    for (var i = 0; i < word1.length; i += 1) {
        var char1 = word1[i];
        for (var j = 0; j < word2.length; j += 1) {
            var char2 = word2[j];
            if (word2.indexOf(char1) === -1 || word1.indexOf(char2) === -1) {
                return false;
        }
        }
    }
    return true;
} 

console.log(isUniqueAnagram('iceman', 'cinema')); // => true
console.log(isUniqueAnagram('abcd', 'adcb')); // => true
console.log(isUniqueAnagram('abcd', 'adxb')); // => false
console.log(isUniqueAnagram('abcd', 'abcdx')); // => false
