function isStopWord(word, stopWords) {
    for (var i = 0; i < word.length; i += 1) {
        if (stopWords[0] === word[i]) {
            return true;
        } 
    }
    return false;
}

var word = ["forest", "gump", "the", "runner"];
var stopWords = ["the"];
console.log(isStopWord(word, stopWords));
