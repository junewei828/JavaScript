function removeVowels(word) {
    var newWord = '';
    var vowels = 'aeiou'.split('');
    for (var i = 0; i < word.length; i += 1) {
        var char = word[i];
        if (vowels.indexOf(char) > -1) {
            newWord += '*';
        } else {
            newWord += char;
        }
    }
    return newWord;
}

console.log(removeVowels('word'));

function censor(sentence, curseWords) {
    var words = sentence.split(' ');
    var newWords = [];

    for (var i = 0; i < words.length; i += 1) {
        var word = words[i];

        if (curseWords.indexOf(word.toLowerCase()) === -1) {
            newWords.push(word);
        } else {
            newWords.push(removeVowels(word));
        }
    }
    return newWords.join(' ');
}

var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
console.log(result1); //=> "D*rn you Harold you son of a g*n"
var result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
console.log(result2); //=> "Schn*k*ys I dont give a d*ddly sq**t"