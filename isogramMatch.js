function isogramMatcher(word1, word2) {
    var sum1 = 0;
    var sum2 = 0;

    for (var i = 0; i < word1.length; i += 1) {
        if (word1[i] === word2[i]) {
            sum1 += 1;
        } else if (word2.indexOf(word1[i]) !== -1) {
            sum2 += 1;
        }
    }
    return [sum1, sum2];
}

console.log(isogramMatcher("an", "at")); //=> [1, 0]
console.log(isogramMatcher("or", "go")); //=> [0, 1]
console.log(isogramMatcher("cat", "tap")); //=> [1, 1]
console.log(isogramMatcher("home", "dome")); //=> [3, 0]
console.log(isogramMatcher("ultrasonic", "ostracized")); //=> [3, 4]
console.log(isogramMatcher("unpredictably", "hydromagnetic")); //=> [1, 8]