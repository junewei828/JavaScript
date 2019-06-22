function mySome(arr, cb) {
    for (var i = 0; i < arr.length; i += 1) {
        var el = arr[i];
        if (cb(el) === true) {
            return true;
        }
    } 
    return false;
}
    


function isNegative(num) {
  return num < 0;
}

console.log(mySome([10, -10, 11, 4], isNegative)); // => true
console.log(mySome([-10, -10, -11, -4], isNegative)); // => true
console.log(mySome([2, 4, 6, 8], isNegative)); // => false
