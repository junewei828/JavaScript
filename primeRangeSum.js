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


function primeRangeSum(num1, num2) {
    if (num1 > num2) {
        var start = num2;
        var end = num1;
    } else {
        start = num1;
        end = num2;
    }
    var sum = 0;
    for (var i = start; i <= end; i += 1) {
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