function myForEach(arr, cb) {
    for (var i = 0; i < arr.length; i += 1) {

       cb(arr[i], i, arr);
    }
}

// function printInfo(ele, i, arr) {
//       console.log(ele, "is at position", i, "in array", arr);
//     }

//     myForEach(['a', 'b', 'c'], printInfo)

function printHalf(num) {
  console.log(num / 2);
}

myForEach(['10', '50', '120'], printHalf); // prints