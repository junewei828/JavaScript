function tripletSum(array,sum) {
    var newArr = [];
    for (var i = 0; i < array.length; i += 1) {
        var num = array[i];
        for (var j = i + 1; j < array.length; j += 1) {
            var num1 = array[j];
            for (var k = j + 1; k < array.length; k += 1) {
                var num2 = array[k];
                if (num + num1 + num2 === sum) {
                    newArr.push([num, num1, num2]);
                }
            }
        }
    }
    return newArr;
}

var arr1 = [1, 3, 5, 2, 4];
console.log(tripletSum(arr1, 8)); // => [ [ 1, 3, 4 ], [ 1, 5, 2 ] ]