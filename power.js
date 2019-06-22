function power(base, exp) {
    var result = 1;

    for (var i = 0; i < exp; i += 1) {
        result *= base;
    }
 
    return result;
}

console.log(power(2, 5));
console.log(power(2, 10)); // => 1024);
console.log(power(9, 2)); // => 81);
console.log(power(9, 3)); // => 729);
console.log(power(11, 0)); // => 1);
console.log(power(11, 1)); // => 11);
