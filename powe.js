function power(base, exp) {
    if (exp <= 0) {
        return 1;
    } else {
        var result = base * power(base, exp - 1);
        return result;
    }
}

console.log(power(2,5));
console.log(power(2, 10)); // => 1024
console.log(power(9, 2)); // => 81
console.log(power(9, 3)); // => 729
console.log(power(11, 0)); // => 1
console.log(power(11, 1)); // => 11