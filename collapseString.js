function collapseString(str) {
    var newStr = '';
    for (var i = 0; i < str.length; i += 1) {
        if (str[i] === str[i + 1]) {
            continue;
        }
        else {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(collapseString('apple')); //=> 'aple')
console.log(collapseString('AAAaalviiiiin!!!')); //=> 'Aalvin!')
console.log(collapseString('hello   app academy')); //=> 'helo ap academy')