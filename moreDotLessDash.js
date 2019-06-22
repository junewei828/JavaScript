function moreDotLessDash(str) {
    var dotNum = 0;
    var dashNum = 0;

    for (var i = 0; i < str.length; i += 1) {
        var char = str[i];
        if (char === '.') {
            dotNum += 1; 
        } else if (char === '-') {
            dashNum += 1;
        }
    }
    return dotNum > dashNum;
}

// console.log(moreDotLessDash('2-D arrays are fun. I think.')); // => true
// console.log(moreDotLessDash('.-.-.')); // => true
// console.log(moreDotLessDash('.-')); // => false
// console.log(moreDotLessDash('..--')); // => false

function assert(expected, actual, testcase) {
    console.log(testcase);
    if (expected === actual) {
        console.log('PASSED!');
    }
    else {
        console.log('FAILED!')
    }
}

assert(true, moreDotLessDash('2-D arrays are fun. I think.'), 'return true if more dots than dash!');

