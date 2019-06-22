function evenSum(num) {
    var sum = 0;
    for (var i = 0; i <= num; i += 1) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}

function evenSumArray(array) {
    var newArr = [];
    for (var i = 0; i < array.length; i += 1) {
        var n = evenSum(array[i]);

        newArr.push(n);
    }

    return newArr;
}

console.log(evenSumArray([6, 7, 5])); //=> [ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5])); //=> [ 2, 20, 2, 6 ]