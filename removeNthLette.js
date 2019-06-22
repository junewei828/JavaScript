function removeNthLetter(word, n) {
    var newWord = word.slice(0,n) + word.slice(n+1);
    return newWord;
}

console.log(removeNthLetter('bootcamp', 0)); // => 'ootcamp'
console.log(removeNthLetter('bootcamp', 6)); // => 'bootcap'
console.log(removeNthLetter('bootcamp', 4)); // => 'bootamp'
console.log(removeNthLetter('computer', 3)); // => 'comuter'