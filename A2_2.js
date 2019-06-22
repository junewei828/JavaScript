/*******************************************************************************
Write a function `isPrime(number)` that returns a boolean indicating if `number`
is prime or not.

Examples:

isPrime(-7): // => false
isPrime(2); // => true
isPrime(11); // => true
isPrime(15); // => false
*******************************************************************************/

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


console.log(isPrime(-7)); // => false
console.log(isPrime(2)); // => true
console.log(isPrime(11)); // => true
console.log(isPrime(15)); // => false