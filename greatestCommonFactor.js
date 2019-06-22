function greatestCommonFactor(num1, num2) {
    for (var i = 1; i <= num1; i += 1) {
        if (num1 % i === 0 && num2 % i === 0) {
            var result = i;
        }
    }
    return result;
}

console.log(greatestCommonFactor(6, 10)); // => 2
console.log(greatestCommonFactor(10, 15)); // => 5
console.log(greatestCommonFactor(4, 7)); // => 1
console.log(greatestCommonFactor(4, 8)); // => 4
console.log(greatestCommonFactor(45, 30)); // => 15