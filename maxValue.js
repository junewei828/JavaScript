function maxValue(array) {
    var max = null
    for (var i = 0; i < array.length; i += 1) {
           var num = array[i]
            if (num > max || num === null) {
                max = num;
            }
        }
        console.log(max)     
    }

maxValue([12, 6, 43, 2]); // => 43
maxValue([]); // => null
maxValue([-4, -10, 0.43]); // => 0.43
