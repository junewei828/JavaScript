function minValueCallback(array, cb) {
    var min = null;

    for (var i = 0; i < array.length; i += 1) {
        var num = array[i];
        if (num < min || min === null) {
            min = num;
        }
    }

    return cb(min);
}

var array1 = [-2, -7, 0, 8];
console.log(minValueCallback(array1, Math.abs)); // => 7

// example cb
function double(n) {
  return n * 2
}
var array2 = [12, 9, 20, 13, 14];
console.log(minValueCallback(array2, double)); // => 18