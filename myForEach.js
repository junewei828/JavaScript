function myForEach(arr, cb) {

    for (var i = 0; i < arr.length; i += 1) {
        var el = arr[i]
        cb(el, i, arr);
    }

}

function printInfo(ele, i, ar, arr) {
      console.log(ele, "is at position", i, "in array", arr);
    }
    
    myForEach(['a', 'b', 'c'], printInfo); // prints
    //a is at position 0 in array [ 'a', 'b', 'c' ]
    //b is at position 1 in array [ 'a', 'b', 'c' ]
    //c is at position 2 in array [ 'a', 'b', 'c' ]
    
    
    function printHalf(num) {
      console.log(num / 2);
    }
    
    myForEach(['10', '50', '120'], printHalf); // prints