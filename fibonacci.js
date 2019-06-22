function fibonacci(n) {
    if (n === 0) {
        return [];
    }
    else if (n === 1) {
        return [1];
    }

    var arr = [1, 1];

    for (var i = 2; i < n; i += 1) {
        var last = arr[arr.length - 1];
        var secondLast = arr[arr.length - 2];
        var next = last + secondLast;

        arr.push(next); 
    }
    return arr;
}

console.log(fibonacci(10));