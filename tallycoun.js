function tallyCount(array) {
    var obj = {};
 

    for (var i = 0; i < array.length; i += 1) {
        var el = array[i];

        if (obj[el] === undefined) {
        obj[el] = 'I';
    } else {
        obj[el] += 'I'
    }
}
    return obj;
}

var arr1 = ['cat', 'dog', 'cat', 'cat', 'fish', 'dog', 'squirrel']
console.log(tallyCount(arr1)); // => { cat: 'III', dog: 'II', fish: 'I', squirrel: 'I' }
var arr2 = ['x', 'x', 'y', 'z', 'y', 'x']
console.log(tallyCount(arr2)); // => { x: 'III', y: 'II', z: 'I' }