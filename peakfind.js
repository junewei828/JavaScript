function peakFinder(array) {
    var peaks = [];

    for (var i = 0; i < array.length; i += 1) {
        var point = array[i];
        var before = array[i - 1];
        var after = array[i + 1];

        if (i === 0 && point > after) {
            peaks.push(i);
        } 
        else if ((i === array.length -1) && point > before) {
            peaks.push(i);
        } 
        else if (point > before && point > after) {
            peaks.push(i);
        }
    }
    return peaks;
}

console.log(peakFinder([1, 2, 3, 2, 1])); //=> [2]
console.log(peakFinder([2, 1, 2, 3, 4, 5])); //=> [0, 5]
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5])); //=> [2, 6, 8]