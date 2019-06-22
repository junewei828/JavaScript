function fib(n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    var result = fib(n-1) + fib(n-2);
    return result;
}

console.log(fib(7));