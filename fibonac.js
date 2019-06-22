function fibonacci(n) {
    var arr = [1, 1];
    if (n === 0) {
        return [];
    }
    else if (n === 1) {
        return [1];
    } else {
       
        for (var i = 2; i < n; i += 1) {
            var last = arr[arr.length - 1];
            var secLast = arr[arr.length - 2];
            var newEl = last + secLast;
            arr.push(newEl);
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