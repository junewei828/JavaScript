function isPalindrome(sentence) {
    var words = sentence.split(' ');
    var str = words.join('');

    for (var i = 0; i < str.length; i += 1) {
        var char1 = str[i];
        var char2 = str[str.length - 1 - i];

        if (char1 !== char2) {
            return false;
        }
    }

    return true;
}


console.log(isPalindrome('rats live on no evil star')); // => true
console.log(isPalindrome('stella won no wallets')); // => true
console.log(isPalindrome('racecar')); // => true
console.log(isPalindrome('hello world')); // => false