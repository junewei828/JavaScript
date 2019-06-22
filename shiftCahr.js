function shiftChars(word, num) {
     var alphabet = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
   'n','o','p','q','r','s','t','u','v','w','x','y','z'
 ];

     var result = '';

    for (var i = 0; i < word.length; i += 1) {
        var char = word[i];
        result += alphabet[(alphabet.indexOf(char) + num) % alphabet.length]
    }
    return result;
}

console.log(shiftChars('able', 1)); // => 'bcmf'
console.log(shiftChars('apple', 2)); //=> 'crrng'
console.log(shiftChars('bootcamp', 3)); //=> 'errwfdps'
console.log(shiftChars('zebra', 5)); //=> 'ejgwf'