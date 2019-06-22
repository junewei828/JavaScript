function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i < n; i += 1) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function numberPrimes(n) {
    var count = 0;

    for (var i = 0; i <= n; i += 1) {
        if (isPrime(i)) {
            count += 1;
        }
    }
    return count;
}

console.log(numberPrimes(10)); // => 4
console.log(numberPrimes(12)); // => 5
console.log(numberPrimes(20)); // => 8
console.log(numberPrimes(100)); // => 25