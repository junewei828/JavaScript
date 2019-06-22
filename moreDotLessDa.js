function moreDotLessDash(str) {
    var DotCount = 0;
    var dashCount = 0;

    for (var i = 0; i < str.length; i += 1) {
        var el = str[i];

        if (el === '.') {
            DotCount += 1;
        }
        else if (el === '-') {
            dashCount += 1;
        }
    }

    return DotCount > dashCount;
}

console.log(moreDotLessDash('2-D arrays are fun. I think.')); // => true
console.log(moreDotLessDash('.-.-.')); // => true
console.log(moreDotLessDash('.-')); // => false
console.log(moreDotLessDash('..--')); // => false