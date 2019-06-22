function tripletSum(array, sum) {
    var result = [];
    
    for (var i = 0; i < array.length; i += 1) {
        var el1 = array[i];

        for (var j = i + 1; i < array.length; j += 1) {
            var el2 = array[j];

            for (var k = j + 1; k < array.length; k += 1) {
                var el3 = array[k];

                if (el1 + el2 + el3 === sum) {
                    result.push([el1, el2, el3]);
                }
            }
        }
    }
    console.log(result);
}

var arr1 = [1, 3, 5, 2, 4];
tripletSum(arr1, 8); // => [ [ 1, 3, 4 ], [ 1, 5, 2 ] ]