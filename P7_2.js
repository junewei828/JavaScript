/*******************************************************************************
Write a function bigramArray(sentence) that takes in a sentence string and returns
the an array of containing all bigrams in the sentence. A bigram is a pair of
consecutive words of a sentence.

Examples:

bigramArray('today is a great day') => [ 'today is', 'is a', 'a great', 'great day' ]
bigramArray('bigrams are very useful') => [ 'bigrams are', 'are very', 'very useful' ]
*******************************************************************************/

function bigramArray(sentence) {
    var words = sentence.split(' ');
    var arr = [];

    for (var i = 0; i < words.length - 1; i += 1) {
        var word1 = words[i];
        var word2 = words[i + 1];
        var pair = word1 + ' ' + word2;
        arr.push(pair);
    }

    return arr;
}

console.log(bigramArray('today is a great day')); // => [ 'today is', 'is a', 'a great', 'great day' ])
console.log(bigramArray('bigrams are very useful')); //=> [ 'bigrams are', 'are very', 'very useful' ])
