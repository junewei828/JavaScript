function sumArray(array) {
    var sum = 0
    for (var i = 0; i < array.length; i += 1) {
        sum = sum + array[i];
    }
    console.log(sum)
}

 sumArray([5, 6, 4]); // => 15
 sumArray([7, 3, 9, 11]); // => 30