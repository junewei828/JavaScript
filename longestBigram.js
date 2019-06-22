function longestBigram(sentence) {
    var words = sentence.split(' ');
    var longest = '';

    for (var i = 0; i < words.length - 1; i += 1) {
        var word1 = words[i];
        var word2 = words[i + 1];
        var len = word1.length + word2.length;
        if (len > longest.length) {
            longest = word1 + ' ' + word2;
        }
    }
    return longest;
}

console.log(longestBigram('measure twice cut once')); // => 'measure twice'
console.log(longestBigram("One must have a mind of winter")); // => 'must have'
console.log(longestBigram("go home to eat")); // => 'go home'
console.log(longestBigram("his last assessment is fun")); // => 'last assessment'