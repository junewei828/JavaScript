function charCount(string) {
    var count = {};
    for (var i = 0; i < string.length; i += 1) {
        var char = string[i];
        if (count[char] === undefined) {
            count[char] = 1;
        } else {
            count[char] += 1;
        }
    }
    return count;
}

function countRepeats(string) {
    var count = charCount(string);
    var numRepeats = 0;

    for (var char in count) {
        if(count[char] > 1) {
            numRepeats ++;
        }
    }
    return numRepeats;
}
console.log(countRepeats('mississippi')); //=> 3)