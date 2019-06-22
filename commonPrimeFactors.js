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

console.log(isPrime(1))

function commonPrimeFactors(num1, num2) {
    var arr = [];
    var final = [];

    for (var i = 0; i <= num1; i += 1) {
        if (num1 % i === 0 && num2 % i === 0) {
            arr.push(i);
        }
    }
    for (var i = 0; i < arr.length; i += 1) {
        var num = arr[i];
        if (isPrime(num)) {
        final.push(num);
        }
    }
    return final;
}

console.log(commonPrimeFactors(12, 50)); // => [ 2 ])
console.log(commonPrimeFactors(6, 24)); // => [ 2, 3 ])
console.log(commonPrimeFactors(11,22)); // => [ 11 ])
console.log(commonPrimeFactors(45, 60)); // => [ 3, 5 ])
