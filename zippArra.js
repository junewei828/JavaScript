function zipArray(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i += 1) {
        result.push([arr1[i], arr2[i]]);
    }

    return result;
}

var a1 = ['a', 'b', 'c', 'd'];
var a2 = [10, 20, 30, 40];

var result = zipArray(a1, a2);
console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]