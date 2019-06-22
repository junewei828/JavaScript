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

function smallestPrime(array) {
    var smallest = null;
    for (var i = 0; i < array.length; i += 1) {
        var num = array[i];
        if (isPrime(num) && (smallest === null || smallest > num)) {
            smallest = num;
        }
    }
    return smallest;
}

var arr1 = [ 6, 7, 12, 11, 5, 4 ];
console.log(smallestPrime(arr1)); // => 5
var arr2 = [11, -7, 7, 8, 6, 10];
console.log(smallestPrime(arr2)); // => 7
var arr3 = [];
console.log(smallestPrime(arr3)); // => null
var arr4 = [4, 6, 8, 10];
console.log(smallestPrime(arr4)); // => null