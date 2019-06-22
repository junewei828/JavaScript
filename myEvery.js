function myEvery(arr, cb) {

    for (var i = 0; i < arr.length; i += 1) {
        var el = arr[i];
        if (cb(el) === false) {
            return false;
        }
    }
    return true;
}

function isEven(num) {
  return num % 2 === 0;
}

console.log(myEvery([10, 4, 8, 20], isEven)); // => true)
console.log(myEvery([2, 2, 10, 11, 12], isEven)); // => false)