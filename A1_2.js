/******************************************************************************
Write a function reverseSentence(sentence) that returns a string where all the
words in the input sentence are reversed. Don't use Array#reverse.

Examples:

reverseSentence("Go to the store") => "store the to Go"
reverseSentence("Jump, jump for joy") => "joy for jump Jump," */

function reverseSentence(sentence) {
    var arr = [];
    var words = sentence.split(' ');

    for (var i = words.length - 1; i >= 0; i--) { 
        arr.push(words[i]);
    }

    return arr.join(' ');
}

console.log(reverseSentence("Go to the store")); //=> "store the to Go"
console.log(reverseSentence("Jump, jump for joy"));// => "joy for jump Jump," */