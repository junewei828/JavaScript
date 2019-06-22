function additionSequence(array, seq) {
    var result = [];
    for (var i = 0; i < array.length; i += 1) {
        var num = array[i];
        var offset = seq[i % seq.length];
        result.push(num + offset);
    }

    return result;
}

array = [3, 2, 5, 4, 2, 1, 10];
sequence = [2, 4, 6];

console.log(additionSequence(array,sequence));

// array:    3 2  5 4 2 1 10
// sequence: 2 4  6 2 4 6  2
// result:   5 6 11 6 6 7 12