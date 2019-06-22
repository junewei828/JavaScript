function nextTwoPrimes(num) {
    var arr = [];
    for (var i = num + 1; arr.length < 2; i += 1) {
        arr.push(i);
    }
    return arr;
}

function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (var i = 2; i < num; i += 1) {
        if (num % i === 0) {
            return false;
        }    
    }
    return true;
}

console.log(nextTwoPrimes(2)); // => [ 3, 5 ]
console.log(nextTwoPrimes(3)); // => [ 5, 7 ]
console.log(nextTwoPrimes(7)); // => [ 11, 13 ]
console.log(nextTwoPrimes(8)); // => [ 11, 13 ]
console.log(nextTwoPrimes(20)); // => [ 23, 29 ]
console.log(nextTwoPrimes(97)); // => [ 101, 103 ]
