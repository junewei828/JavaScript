/**************************************************************************************
Write a function `wordSandwich(outerWord, innerWord)` that takes in two strings and
returns a string representing a word sandwich. See the examples below.

Examples:

wordSandwich('bread', 'cheese');  // => 'BREADcheeseBREAD'
wordSandwich('BREAD', 'CHEESE');  // => 'BREADcheeseBREAD'
wordSandwich('HeLLo', 'worLD');   // => 'HELLOworldHELLO'*/

function wordSandwich(outWord, innerWord) {
    var result = outWord.toUpperCase() + innerWord.toLowerCase() + outWord.toUpperCase();
    return result;
}


console.log(wordSandwich('bread', 'cheese'));  // => 'BREADcheeseBREAD'
console.log(wordSandwich('BREAD', 'CHEESE'));  // => 'BREADcheeseBREAD'
console.log(wordSandwich('HeLLo', 'worLD'));   // => 'HELLOworldHELLO'*/