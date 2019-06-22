/*******************************************************************************
Write a function primeFactors(n) that takes in a number, `n`. The function should
return an array containing all factors of `n` that are prime. A factor is a number
that divides another.

Examples:

primeFactors(10) => [ 2, 5 ]
primeFactors(24) => [ 2, 3 ]
primeFactors(30) => [ 2, 3, 5 ]
primeFactors(11) => [11]
*******************************************************************************/

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

function primeFactors(n) {
    var arr = [];

    for (var i = 2; i <= n; i += 1) {
        if (isPrime(i) && (n % i === 0)) {
            arr.push(i);
        }
    }

    return arr;
}

console.log(primeFactors(10)); //=> [ 2, 5 ]
console.log(primeFactors(24)); //=> [ 2, 3 ]
console.log(primeFactors(30)); //=> [ 2, 3, 5 ]
console.log(primeFactors(11)); //=> [11]