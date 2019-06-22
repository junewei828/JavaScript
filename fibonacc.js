function fibonacci(n) {
    var arr = [];
    for (var i = 0; i < n; i += 1) {
        if (i === 0 || i === 1) {
            arr.push(1);
        }
        else {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        }
    }
    return arr;
}

console.log(fibonacci(0)); // => []
console.log(fibonacci(1)); // => [ 1 ]
console.log(fibonacci(2)); // => [ 1, 1 ]
console.log(fibonacci(3)); // => [ 1, 1, 2 ]
console.log(fibonacci(5)); // => [ 1, 1, 2, 3, 5 ]
console.log(fibonacci(10)); // => [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]