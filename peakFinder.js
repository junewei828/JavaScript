function peakFinder(array) {
    var result = [];
    for (var i = 0; i < array.length; i += 1) {
        if (i === 0 && array[0] > array[i + 1]) {
            result.push(i);
        }
        else if (i === array.length -1 && array[i] > array[i-1]) {
            result.push(i);
        }
        else if ((array[i] > array[i-1]) && (array[i] > array[i +1])) {
            result.push(i);
        }
    }
    return result;
}

console.log(peakFinder([1, 2, 3, 2, 1])); //=> [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])); //=> [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); //=> [2, 6, 8])