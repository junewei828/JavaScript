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

function smallestPrime(array) {
    var smallestPrime = null;

    for (var i = 0; i < array.length; i += 1) {
        var el = array[i];

        if (isPrime(el) && (smallestPrime === null || smallestPrime > el)) {
            smallestPrime = el;
        }
    }

    return smallestPrime;
}

var arr1 = [ 6, 7, 12, 11, 5, 4 ];
console.log(smallestPrime(arr1)); // => 5

var arr2 = [11, -7, 7, 8, 6, 10];
console.log(smallestPrime(arr2)); // => 7

var arr3 = [];
console.log(smallestPrime(arr3)); // => null

var arr4 = [4, 6, 8, 10];
console.log(smallestPrime(arr4)); // => null