function myFind(arr,cb) {

    for (var i = 0; i < arr.length; i += 1) {
        var el = arr[i];

        if (cb(el)) {
            return el;
        }
    }
}

function isUpper(str) {
    return str.toUpperCase() === str;
  }
  
  console.log(myFind(['bootcamp', 'PREP', 'IS', 'fun'], isUpper)); //=> 'PREP'
  console.log(myFind(['hello', 'world'], isUpper)); //=> undefined
  
  
  function isEven(n) {
    return n % 2 === 0;
  }
  
  console.log(myFind([11, 7, 10, 20], isEven)); //=> 10
  console.log(myFind([3, 5, 9], isEven)); //=> undefined
  