function myMap(arr, cb) {
    var result = [];

    for (var i = 0; i < arr.length; i += 1) {
        var el = cb(arr[i], i, arr); 
        result.push(el);
    }
    return result;
}

function doubler(num) {
  return num * 2;
}

console.log(myMap([2, 4, 6, 1], doubler)); // => [ 4, 8, 12, 2 ]

console.log(myMap([9, 25, 100, 36, 81], Math.sqrt)); // => [ 3, 5, 10, 6, 9 ]