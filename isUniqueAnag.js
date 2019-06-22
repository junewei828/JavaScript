function isUniqueAnagram(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    } else {
        for (var i = 0; i < word1.length; i += 1) {
            var char = word1[i];
            if (word2.indexOf(char) === -1) {
                return false;
            }
        } 
        return true;
    } 
}

console.log(isUniqueAnagram('iceman', 'cinema')); // => true
console.log(isUniqueAnagram('abcd', 'adcb')); // => true
console.log(isUniqueAnagram('abcd', 'adxb')); // => false
console.log(isUniqueAnagram('abcd', 'abcdx')); // => false