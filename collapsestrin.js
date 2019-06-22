function collapseString(str) {
    var newStr = '';

    for (var i = 0; i < str.length; i += 1) {
        var char = str[i];
        if (char !== newStr[newStr.length - 1]) {
            newStr += char;
        } 
    }

    return newStr;
}

console.log(collapseString('apple')); //=> 'aple'
console.log(collapseString('AAAaalviiiiin!!!')); //=> 'Aalvin!'
console.log(collapseString('hello   app academy')); //=> 'helo ap academy'