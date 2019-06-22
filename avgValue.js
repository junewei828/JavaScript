function avgValue(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i += 1) {
        sum += array[i]
    }
    avg = sum / array.length
    console.log(avg)
}

avgValue([10, 20]); // => 15
avgValue([2, 3, 7]); // => 4
avgValue([100, 60, 64]); // => 74.66666666666667