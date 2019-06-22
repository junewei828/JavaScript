function isogramMatcher(arr1, arr2) {
    var num1 = 0;
    var num2 = 0;
    var result = [];

    for (var i = 0; i < arr1.length; i += 1) {
        var char = arr1[i];

        if (char === arr2[i]) {
            num1 += 1;
        } else if (arr2.indexOf(char) > -1) {
            num2 += 1;
        }
    }
    result.push(num1);
    result.push(num2);
    return result;
    
}

console.log(isogramMatcher("an", "at")); //=> [1, 0]
console.log(isogramMatcher("or", "go")); //=> [0, 1]
console.log(isogramMatcher("cat", "tap")); //=> [1, 1]
console.log(isogramMatcher("home", "dome")); //=> [3, 0]
console.log(isogramMatcher("ultrasonic", "ostracized")); //=> [3, 4]
console.log(isogramMatcher("unpredictably", "hydromagnetic")); //=> [1, 8]