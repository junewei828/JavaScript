function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (var i = 2; i <= n / 2; i += 1) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function previousPrime(n) {
    for (var i = n - 1; i >=2; i--) {
        if (isPrime(i)) {
            return i;
        } 
    }
    return null;
}

function previousPrimeArray(array) {
    var arr = [];

    for (var i = 0; i < array.length; i += 1) {
        var num = array[i];

        if (isPrime(num)) {
            arr.push(previousPrime(num));
        }
        else {
            arr.push(num);
        }
    }

    return arr;
}

console.log(previousPrimeArray([10, 12, 11, 7, 16])); // => [ 10, 12, 7, 5, 16 ])
console.log(previousPrimeArray([17, 24, 29, 5, 2, 4])); // => [ 13, 24, 23, 3, null, 4 ])