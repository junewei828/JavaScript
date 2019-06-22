function signFlipCount(arr) {
    var count = 0;
    for (var i = 0; i < arr.length - 1; i += 1) {
        var num = arr[i];
        if ((num * arr[i + 1]) < 0) {
            count += 1;
        }
    } 

    return count;
}

console.log(signFlipCount([5, 6, 10, 3])); //=> 0
console.log(signFlipCount([-12, 0, -3, -5])); //=> 0
console.log(signFlipCount([-12, 10, -3, -5])); //=> 2
console.log(signFlipCount([1, -2, -3, -4])); //=> 1
console.log(signFlipCount([-1, 11.3, -3, 100])); //=> 3
