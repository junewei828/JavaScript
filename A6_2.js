/*******************************************************************************
Write a function isPalindrome(sentence) that returns true if the characters of the
sentence string form a palindrome, false otherwise. A palindrome is a word or
phrase that is that is the same forwards and backwards.

Examples:

isPalindrome('rats live on no evil star'); // => true
isPalindrome('stella won no wallets'); // => true
isPalindrome('racecar'); // => true
isPalindrome('hello world'); // => false
*******************************************************************************/

function isPalindrome(sentence) {
    var str = sentence.split(' ').join('');

    for (var i = 0; i <= str.length; i += 1){
        var first = str[i];
        var last = str[str.length - 1 - i];
        if (first !== last) {
            return false;
        }
    }

    return true;
}

console.log(isPalindrome('rats live on no evil star')); // => true
console.log(isPalindrome('stella won no wallets')); // => true
console.log(isPalindrome('racecar')); // => true
console.log(isPalindrome('hello world')); // => false