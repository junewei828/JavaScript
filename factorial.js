function factorial(n) {
    var result = 1;
    for (var i = n; i >= 1; i -= 1) {
        result *= i;
    }
    return result;
}

console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10)); // => 3628800)