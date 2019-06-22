function tripletSum(array, sum) {
    var resultArray = [];
    for (var i = 0; i < array.length; i += 1) {
        var num1 = array[i];
        for (var j = i + 1; j < array.length; j += 1) {
            var num2 = array[j];
            for (var k = j + 1; k < array.length; k += 1) {
                var num3 = array[k];
                if (num1 + num2 + num3 === sum) {
                    resultArray.push([num1, num2, num3]);
                }
            }
        }
    }
    return resultArray;
}

var arr1 = [1, 3, 5, 2, 4];
console.log(tripletSum(arr1, 8)); // => [ [ 1, 3, 4 ], [ 1, 5, 2 ]