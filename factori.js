function factorial(n) {
    var result = 1;

    for (var i = 1; i <= n; i += 1) {
        result *= i;
    }
    return result;
}

console.log(factorial(1)); // => 1
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
console.log(factorial(10)); // => 3628800