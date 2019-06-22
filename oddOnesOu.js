function eleCount(array) {
    var count = {};

    for (var i = 0; i < array.length; i += 1) {
        var ele = array[i];

        if (count[ele] === undefined) {
            count[ele] = 1;
        } else {
            count[ele] += 1;
        }
    } return count;
}

function oddOnesOut(array) {
    var arr = [];
    var count = eleCount(array);

    for (var ele in count) {
        if (count[ele] % 2 === 0) {
            arr.push(ele);
        } 
    }
    return arr;
}

var arr1 = ['a', 'b', 'b', 'c', 'd', 'c', 'c', 'd']
console.log(oddOnesOut(arr1)); // => [ 'b', 'd' ]
var arr2 = ['fish', 'fish', 'dog', 'cat', 'dog', 'dog']
console.log(oddOnesOut(arr2)); // => [ 'fish' ]
