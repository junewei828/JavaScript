function power(base, exp) {
    var product = 1;
    for (var i = 1; i <= exp; i += 1) {
        product *= base;
    }
    return product;
} 

console.log(power(2, 5)); // => 32
console.log(power(2, 10)); // => 1024
console.log(power(9, 2)); // => 81
console.log(power(9, 3)); // => 729
console.log(power(11, 0)); // => 1
console.log(power(11, 1)); // => 11
