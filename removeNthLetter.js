function removeNthLetter(word, n) {
    var newWord = '';

    for (var i = 0; i < word.length; i += 1) {
       if (i === n) {
           continue;
       } else {
           newWord += word[i];
       } 
    }
    return newWord;
}

console.log(removeNthLetter('bootcamp', 0)); // => 'ootcamp'
console.log(removeNthLetter('bootcamp', 6)); // => 'bootcap'
console.log(removeNthLetter('bootcamp', 4)); // => 'bootamp'
console.log(removeNthLetter('computer', 3)); // => 'comuter'