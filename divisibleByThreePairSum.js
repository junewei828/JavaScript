function divisibleByThreesPairSum(array) {
    var arr = [];
    for (var i = 0; i < array.length; i += 1) {
        var num1 = array[i];
        for (var j = i + 1; j < array.length; j += 1) {
            var num2 = array[j];
        if ((num1 + num2) % 3 === 0) {
            arr.push([i, j]);
        }
        }   
    } return arr;
}

console.log(divisibleByThreesPairSum([1, 6, 3, 4, 2, 0])); //=> [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]