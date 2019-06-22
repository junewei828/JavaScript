function titlize(title, stopWords) {
    var words = title.split(" ");
    var goodTitle = [];

    for (var i = 0; i < words.length; i += 1) {
        var word = words[i].toLowerCase();

        if (isStopWord(word, stopWords)) {
            goodTitle.push(word);
        } else {
            goodTitle.push(capitalize(title[i]));
        }
}
    return goodTitle.join(" ");
}

function capitalize(word) {
    var newWord = word[0].toUpperCase() + word.slice(1);
    return newWord;
}

//console.log(capitalize('word'));

function isStopWord(word, stopWords) {
    var noPuncWord = removePunc(word);

    if (stopWords.indexOf(noPuncWord) > -1) {
        return true;
    } else {
        return false;
    }
}

function removePunc(word) {
    var puncs = [";", "!", ".", "?", ",", "-"];
    var lastChar = word[word.length - 1];

    if (puncs.indexOf(lastChar) > -1) {
        return word.slice(0, -1);
    }
    else {
        return word;
    }
}

console.log(titlize("shall we dance?", ["dance"]));
// => "Shall We dance?"