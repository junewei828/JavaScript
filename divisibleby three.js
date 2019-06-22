function divisibleByThreePairSum(array) {
    var sumArr = [];
    for (var i = 0; i < array.length; i += 1) {
        for (var j = i + 1; j < array.length; j += 1) {
            if ((array[i] + array[j]) % 3 === 0) {
                sumArr.push([i,j]);
            }
        }
    }
    return sumArr;
}

console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0])); //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]
console.log(divisibleByThreePairSum([8, 3, 5, 9, 2])); //=> [[1, 3]]