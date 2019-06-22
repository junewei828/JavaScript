function countAdjacentSums(arr, n) {
    var count = 0;

    for (var i = 0; i < arr.length - 1; i += 1) {
        var num1 = arr[i];
        var num2 = arr[i + 1];
        if (num1 + num2 === n) {
            count += 1;
        }
    }
    return count;
}

console.log(countAdjacentSums([1, 5, 1], 6)); //=> 2
console.log(countAdjacentSums([7, 2, 4, 6], 7)); //=> 0
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13)); //=> 3