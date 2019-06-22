function longWordCount(string) {
    var count = 0;
    var words = string.split(' ');

    for (var i = 0; i < words.length; i += 1) {
        var word = words[i];
        if (word.length > 7) {
            count += 1;
        }
    }
    return count;
}

console.log(longWordCount("")); // => 0
console.log(longWordCount("short words only")); // => 0
console.log(longWordCount("one reallylong word")); // => 1
console.log(longWordCount("two reallylong words inthisstring")); // => 2
console.log(longWordCount("allwordword longwordword wordswordword")); // => 3
console.log(longWordCount("seventy schfifty five")); // => 1