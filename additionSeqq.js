function additionSequence(arr, seq) {
    var result = [];

    for (var i = 0; i < arr.length; i += 1) {
        var num1 = arr[i];
        var num2 = seq[i % seq.length];
        var sum = num1 + num2;
        result.push(sum);
    }

    return result;
}

array = [3, 2, 5, 4, 2, 1, 10];
sequence = [2, 4, 6];
console.log(additionSequence(array,sequence));