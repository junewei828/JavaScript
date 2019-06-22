
function firstLastCap(sentence) {
    var words = sentence.split(" ");
    var new_words = [];
    for (var i = 0; i < words.length; i += 1) {
        var word = words[i];
        var word_1 = word[0].toUpperCase();
        var middle_chars = word.slice(1, -1).toLowerCase();
        var word_last_char = word[word.length - 1].toUpperCase();
        new_words.push(word_1 + middle_chars + word_last_char);
    }

    return new_words.join(" "); 
}

console.log(firstLastCap('hello BOOTCAMP PrEp'));
