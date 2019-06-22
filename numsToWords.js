function numsToWords(numString) {
    var numObj = {
        '0': 'Zero',
        '1': 'One',
        '2': 'Two',
        '3': 'Three',
        '4': 'Four',
        '5': 'Five',
        '6': 'Six',
        '7': 'Seven',
        '8': 'Eight',
        '9': 'Nine',
        '10':'Ten'
    }

    var str = '';
    for (var i = 0; i < numString.length; i += 1) {
        var num = numString[i];
        str += numObj[num];
    }

    return str;
}

console.log(numsToWords('42')); //=> 'FourTwo')
console.log(numsToWords('123')); //=> 'OneTwoThree')
console.log(numsToWords('159598'));// => 'OneFiveNineFiveNineEight')