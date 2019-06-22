function isogramMatcher(str1, str2) {
    var count1 = 0;
    var count2 = 0;

    for (var i = 0; i < str1.length; i += 1) {

        if (str1[i] === str2[i]) {
            count1 += 1;
        } else if (str2.indexOf(str1[i]) > -1) {
            count2 += 1;
        }
    }

    return [count1, count2];
}

console.log(isogramMatcher("an", "at")); //=> [1, 0]
console.log(isogramMatcher("or", "go")); //=> [0, 1]
console.log(isogramMatcher("cat", "tap")); //=> [1, 1]
console.log(isogramMatcher("home", "dome")); //=> [3, 0]
console.log(isogramMatcher("ultrasonic", "ostracized")); //=> [3, 4]
console.log(isogramMatcher("unpredictably", "hydromagnetic")); //=> [1, 8]

    
