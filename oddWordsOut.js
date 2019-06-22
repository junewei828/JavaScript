function oddWordsOut(sentence) {
    var words = sentence.split(' ');
    var newWords = [];
    
    for (var i = 0; i < words.length; i += 1) {
        var word = words[i];

        if (word.length % 2 !== 1) {
            newWords.push(word);
    }
    }
    return newWords.join(' ');
}

console.log(oddWordsOut('go to the store and buy milk')); // => 'go to milk'
console.log(oddWordsOut('what is the answer')); // => 'what is answer'