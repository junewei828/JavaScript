function pairZero(array) {
    var pairs = [];
    for (var i = 0; i < array.length; i += 1) {
        var num1 = array[i];
        console.log('num1 = ', num1);
        for (var j = i + 1; j < array.length; j += 1) {
            num2 = array[j];
          
            console.log('    num2 = ', num2);
        }
    }
}

pairZero([1,2, -1])