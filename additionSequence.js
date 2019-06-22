function additionSequence(arr1, seq1) {
    var newSeq1 = [];
    var result = [];
    for (var i = 0; i < arr1.length; i += 1) {
        for (var j = 0; j < seq1.length; j += 1) {
            newSeq1.push(seq1[j])
        }
    }
    var newSeq = newSeq1.slice(0,arr1.length);

    for (var i = 0; i < arr1.length; i += 1) {
        result.push(arr1[i] + newSeq[i]);
    }
    return result;
}

var arr1 = [3, 2, 5, 4, 2, 1, 10];
var seq1 = [2, 4, 6];
console.log(additionSequence(arr1, seq1));

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var seq2 = [1, 2];
console.log(additionSequence(arr2, seq2)); // => [ 2, 4, 4, 6, 6, 8, 8 ]