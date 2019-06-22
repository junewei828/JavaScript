function isPrime(num) {
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

function nextPrime(num) {
    for (var i = num + 1; true; i += 1) {
        if (isPrime(i)) {
            return i;
        }
    }
}

function nextPrimeArray(array) {
    var newArr = [];

    for (var i = 0; i < array.length; i += 1) {
        if (isPrime(array[i])) {
            newArr.push(nextPrime(array[i]));
        }
        else {
            newArr.push(array[i]);
        }
    }

    return newArr;
}

console.log(nextPrimeArray([-4, 2, 5, 4, 11])); //=> [ -4, 3, 7, 4, 13 ]
console.log(nextPrimeArray([9, 13, 5, 6])); //=> [ 9, 17, 7, 6 ]
console.log(nextPrimeArray([])); //=> []