// var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
// oddOnesOut(arr1); // => [ 'b', 'd' ]
//
// var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
// oddOnesOut(arr2); // => [ 'fish' ]

function oddOnesOut(arr) {
    var obj = {};
    var result = [];
    for (var i = 0; i < arr.length; i += 1) {
        var char = arr[i];
        if (obj[char] === undefined) {
            obj[char] = 1;
        } else {
            obj[char] += 1;
        }
    }
    for (var k in obj) {
        if (obj[k] % 2 === 0) {
            result.push(k);
        }
    }
    return result;
}

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
console.log(oddOnesOut(arr1)); // => [ 'b', 'd' ]
var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
console.log(oddOnesOut(arr2)); // => [ 'fish' ]