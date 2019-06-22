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

function laligatNum(num) {
    var sum = 0;

    for (var i = 2; i <= num; i += 1) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

function laligatArray(array) {
    var result = [];

    for (var i = 0; i < array.length; i += 1) {
        var num = array[i];
        result.push(laligatNum(num));
    }

    return result;
}

console.log(laligatArray([10, 11, 20, 15])); // => [ 17, 28, 77, 41 ]
console.log(laligatArray([1, 2, 3, 4, 5])); // => [ 0, 2, 5, 5, 10 ]