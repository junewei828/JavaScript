function uniqueChars(word) {
    var newWord = '';
    for (var i = 0; i < word.length; i += 1) {
        var char = word[i];
        if (newWord.indexOf(char) === -1) {
            newWord += char;
        } else {
            continue;
        }
    }
    return newWord;
}

function isogramMatcher(word1,word2) {
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

console.log(isogramMatcher("an", "at")); //=> [1, 0]
console.log(isogramMatcher("or", "go")); //=> [0, 1]
console.log(isogramMatcher("cat", "tap")); //=> [1, 1]
console.log(isogramMatcher("home", "dome")); //=> [3, 0]
console.log(isogramMatcher("ultrasonic", "ostracized")); //=> [3, 4]
console.log(isogramMatcher("unpredictably", "hydromagnetic")); //=> [1, 8]