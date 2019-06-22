function longestLetterStreak(str, searchLetters) {
    var longest = 0;
    var current = 0;

    for (var i = 0; i < str.length; i += 1) {
        var ele = str[i];
        if (searchLetters.indexOf(ele) > -1) {
            current += 1;
        }
        else {
            current = 0;
        }
        if (longest < current) {
            longest = current;
        }
    }

    return longest;

}
console.log(longestLetterStreak("ACCA", ["C"])); // => 2
console.log(longestLetterStreak("YACCADCA", ["C", "A"])); // => 4
console.log(longestLetterStreak("ZTKZQRKKZ", ["Z", "K", "Y"])); // => 3
console.log(longestLetterStreak("YYYYY", ["Z", "K", "Y"])); // => 5
