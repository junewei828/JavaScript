function countChar(string) {
    var countObj = {};

    for (var i = 0; i < string.length; i += 1) {
        var char = string[i];
        if (countObj[char] === undefined) {
            countObj[char] = 1;
        }
        else {
            countObj[char] += 1;
        }
    }

    return countObj;
}

function countRepeats(string) {
    var count = countChar(string);
    var num = 0;
    for (var k in count) {
        if (count[k] > 1) {
            num += 1;
        }
    }
    return num;
}

console.log(countRepeats('alvin')); //=> 0
console.log(countRepeats('aaaalvin')); //=> 1
console.log(countRepeats('pops')); //=> 1
console.log(countRepeats('mississippi')); //=> 3
console.log(countRepeats('hellobootcampprep')); //=> 4