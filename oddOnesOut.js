function oddOnesOut(array) {
    var obj = {};
    var newArray = [];

    for (var i = 0; i < array.length; i += 1) {
        var el = array[i];

        if (obj[el] === undefined) {
            obj[el] = 1;
        }
        else {
            obj[el] += 1;
        }
    }

    for (var k in obj) {
        if (obj[k] % 2 === 0) {
            newArray.push(k);
        }
    }
    return newArray;
}

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
console.log(oddOnesOut(arr1)); // => [ 'b', 'd' ]
var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
console.log(oddOnesOut(arr2)); // => [ 'fish' ]
