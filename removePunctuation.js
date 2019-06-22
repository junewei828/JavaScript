function removePunctuation(word) {
    var Punctuation = [";", "!", ".", "?", ",", "-","@"];
    var arr = [];
    for (var i = 0; i < word.length; i += 1) {
        var Char = word[i];

    if (Punctuation.indexOf(Char) !== -1) {
        continue;
    }
    else {
        arr.push(Char);
    }
}
    return arr.join("");
}
console.log(removePunctuation("neig@@@@@@h.nei;;;;;gh "));