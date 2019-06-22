function additionSequence(array,seq) {
    var result = [];

    for (var i = 0; i < array.length; i += 1) {
        var el1 = array[i];
        var el2 = seq[i % seq.length];
        result.push(el1+el2);
    }
    return result;
}

var arr1 = [3, 2, 5, 4, 2, 1, 10];
var seq1 = [2, 4, 6];
console.log(additionSequence(arr1, seq1));
// => [3+2, 2+4, 5+6, 4+2, 2+4, 1+6, 10+2] => [ 5, 6, 11, 6, 6, 7, 12 ]
var arr2 = [1, 2, 3, 4, 5, 6, 7];
var seq2 = [1, 2];
console.log(additionSequence(arr2, seq2)); // => [ 2, 4, 4, 6, 6, 8, 8 ]