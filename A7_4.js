/*******************************************************************************
Write a function previousPrimeArray(array) that takes in an array of numbers.
The function should a return a new array where each prime number is replaced
with the prime number that comes before it. For example the prime number that comes
before 7 is 5.

Examples:

previousPrimeArray([10, 12, 11, 7, 16]); // => [ 10, 12, 7, 5, 16 ]
previousPrimeArray([17, 24, 29, 5, 2, 4]); // => [ 13, 24, 23, 3, null, 4 ]
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

function previousPrime(num) {
    for (var i = num - 1; i >= 2; i--) {
        if (isPrime(i)) {
            return i;
        }
    }
    return null;
}

function previousPrimeArray(arr) {
    var newArr = [];

    for (var i = 0; i < arr.length; i += 1) {
        if (isPrime(arr[i])) {
            newArr.push(previousPrime(arr[i]));
        }
        else {
            newArr.push(arr[i]);
        }
    } 

    return newArr;
}


console.log(previousPrimeArray([10, 12, 11, 7, 16])); // => [ 10, 12, 7, 5, 16 ]
console.log(previousPrimeArray([17, 24, 29, 5, 2, 4])); // => [ 13, 24, 23, 3, null, 4 ]
