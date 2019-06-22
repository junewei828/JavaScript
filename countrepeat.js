function count(string) {
    var count = {};

    for (var i = 0; i < string.length; i += 1) {
        var char = string[i];
        if (count[char] === undefined) {
            count[char] = 1;
        }
        else {
            count[char] += 1;
        }
    }
    return count;
}

function countRepeats(string) {
    var cnt = count(string);
    var num = 0;
    for (var char in cnt) {
        if (cnt[char] > 1) {
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