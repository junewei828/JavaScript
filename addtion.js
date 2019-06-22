function addtionSequence(array,seq) {
    var result = [];
    for (var i = 0; i < array.length; i += 1) {
        var num1 = array[i];
        var num2 = seq[i % seq.length];
        var sum = num1 + num2;
        result.push(sum);
    }

    return result;
}
array = [3, 2, 5, 4, 2, 1, 10];
sequence = [2, 4, 6];

console.log(addtionSequence(array,sequence));