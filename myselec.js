function mySelect(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i += 1) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function isEven(num) {
  return num % 2 === 0;
}

console.log(mySelect([1,2,3,4,5,6], isEven)); // => [ 2, 4, 6 ]


function isNegative(num) {
  return num < 0;
}

console.log(mySelect([12, -14, 4, -10.2, 0], isNegative)); // => [ -14, -10.2 ]