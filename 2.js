function mySelect(arr, cb) {
    var newArray = [];
    for (var i = 0; i < arr.length; i += 1) {
        var el = arr[i];
        if (cb(el,i,arr)) {
        newArray.push(el);
        }
    }
    return newArray;
}

function isEven(num) {
  return num % 2 === 0;
}

console.log(mySelect([1,2,3,4,5,6], isEven)); // => [ 2, 4, 6 ]


function isNegative(num) {
  return num < 0;
}

mySelect([12, -14, 4, -10.2, 0], isNegative); // => [ -14, -10.2 ]