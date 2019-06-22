/**************************************************************************************
Write a function `reverseString(str)` that takes in a string and returns the given string
with its characters in reverse order.

Examples:

reverseString('taco');        // => 'ocat'
reverseString('hello world'); // => 'dlrow olleh'*/

function reverseString(str) {
    var reversed = '';

    for (var i = str.length - 1; i >= 0; i -= 1) {
        var char = str[i];
        reversed += char;
    }

    return reversed;
}

console.log(reverseString('taco'));        // => 'ocat'
console.log(reverseString('hello world')); // => 'dlrow olleh'*/