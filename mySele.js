function mySelect(arr,cb) {
    var newArr = [];

    for (var i = 0; i < arr.length; i += 1) {
        var ele = arr[i];

        if (cb(ele, i, arr)) {
            newArr.push(ele);
        }
    }

    return newArr;
}

function isUpper(str) {
    return str.toUpperCase() === str;
  }
  
  function isEven(n) {
    return n % 2 === 0;
  }
  
  var result1 = mySelect(['BOOTCAMP', 'prep', 'iS', 'COOL'], isUpper);
  console.log(result1); // => [ 'BOOTCAMP', 'COOL' ]
  
  var result2 = mySelect([1, 2, 4, 7, 8], isEven);
  console.log(result2); // => [ 2, 4, 8 ]