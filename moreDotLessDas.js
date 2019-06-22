function moreDotLessDash(str) {
    var totalDot = 0;
    var totalDash = 0;

    for (var i = 0; i < str.length; i += 1) {
        if (str[i] === '.') {
            totalDot += 1;
        } else if (str[i] === '-') {
            totalDash += 1;
        }
    }

    return totalDot > totalDash;
}

console.log(moreDotLessDash('2-D arrays are fun. I think.')); // => true
console.log(moreDotLessDash('.-.-.')); // => true
console.log(moreDotLessDash('.-')); // => false
console.log(moreDotLessDash('..--')); // => false