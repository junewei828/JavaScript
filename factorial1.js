function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        var result = n * factorial(n - 1);
        return result;
    }
}

console.log(factorial(1)); // => 1
console.log(factorial(4)); // => 24
console.log(factorial(5)); // => 120
console.log(factorial(10)); // => 3628800