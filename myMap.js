function myMap(arr, cb) {
    var newArray = [];
    for (var i = 0; i < arr.length; i += 1) {
        var el = arr[i];
        if(true) {
            newArray.push(cb(el, i, arr));
        }
    }
    return newArray;
}

function doubler(num) {
  return num * 2;
}

console.log(myMap([2, 4, 6, 1], doubler)); // => [ 4, 8, 12, 2 ]

console.log(myMap([9, 25, 100, 36, 81], Math.sqrt)); // => [ 3, 5, 10, 6, 9 ]