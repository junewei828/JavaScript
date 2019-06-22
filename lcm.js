function lcm(num1, num2) {
    for (var i = 1; i <= num1 * num2; i += 1) {
        if (i % num1 === 0 && i % num2 === 0) {
            return i;
        }
    }
}

console.log(lcm(2, 3)); // => 6)
console.log(lcm(6, 10)); // => 30)
console.log(lcm(24, 26)); // => 312)