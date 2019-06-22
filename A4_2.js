function longestWord(sentence) {
    var words = sentence.split(' ');
    var longest = words[0];

    for (var i = 0; i < words.length; i += 1) {
        var word = words[i];

        if (longest === null || longest.length <= word.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord('app academy is cool')); // => 'academy'
console.log(longestWord('hate having hungry hippos')); // => 'hippos'
console.log(longestWord('bootcamp')); // => 'bootcamp'
console.log(longestWord('')); // => ''