/*------------------------------------------------------------------------------
// primeRangeSum
//
// Write a function `primeRangeSum(num1, num2)` that takes two numbers and returns
// the sum of all prime numbers between start and end (inclusive).
//
// Examples:
//
// primeRangeSum(10, 20); // => 60
// primeRangeSum(20, 10); // => 60
// primeRangeSum(20, 29); // => 52
// primeRangeSum(50, 41); // => 131
------------------------------------------------------------------------------*/


function isPrime(num) {
    //return true if num is prime
    // return false if num is not prime
    if (num < 2) {
        return false;
    }
    
    for (var i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}

function primeRangeSum(num1, num2) {
    var sum = 0; // 11 + 13 + 17 + 19 => 60
    if (num1 < num2) {
        var start = num1;
        var end = num2;
    }
    else {
        start = num2;
        end = num1;
    }
    for (var i = start; i <= end; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

console.log(primeRangeSum(10, 20)); // => 60
console.log(primeRangeSum(20, 10)); // => 60
console.log(primeRangeSum(20, 29)); // => 52
console.log(primeRangeSum(50, 41)); // => 131