function myForEach(arr, cb) {
    for (var i = 0; i < arr.length; i += 1) {
        var el = arr[i];
        cb(el, i, arr);
    }
}



function printInfo(ele, i, arr) {
  console.log(ele, "is at position", i, "in array", arr);
}

myForEach(['a', 'b', 'c'], printInfo)
