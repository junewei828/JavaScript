function removePunctuation(word) {
    var newWord = '';
    var punctuation = ';!.?,-'.split('');
    for (var i = 0; i < word.length; i += 1) {
        var char = word[i];
        if (punctuation.indexOf(char) === -1) {
            newWord += char;
        }
    }
    return newWord;
}

function isStopWord(word, stopwords) {
    if (stopwords.indexOf(removePunctuation(word).toLowerCase()) > -1) {
        return true;
    } else {
        return false;
    }
}

function titleize(title, stopwords) {
    var newArr = [];
    var words = title.split(' ');

    for (var i = 0; i < words.length; i += 1) {
        var word = words[i];
        if (isStopWord(word, stopwords)) {
            newArr.push(word.toLowerCase());
        }
        else {
            newArr.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
        }
    }
    return newArr.join(' ');
}


console.log(titleize("forest gump, the runner", ["the"]));
//=> "Forest Gump, the Runner"

console.log(titleize("MASTER AND COMMANDER", ["and"]));
//=> "Master and Commander"

console.log(titleize("i LOVE; lover of mine", ["love", "of"]));
//=> "I love; Lover of Mine"

console.log(titleize("shall we dance?", ["dance"]));
//=> "Shall We dance?"