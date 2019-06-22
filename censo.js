function changeVowels(word) {
    var vowels = 'aeiou'.split('');
    var newWord = '';
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

function censor(sentence, curseWord) {
    var newArr = [];
    var words = sentence.split(' ');

    for (var i = 0; i < words.length; i += 1) {
        var word = words[i];
        var lowerCase = word.toLowerCase();
        if (curseWord.indexOf(lowerCase) > -1) {
            newArr.push(changeVowels(word));
        }
        else {
            newArr.push(word);
        }
    }
    return newArr.join(' ');
}

var result1 = censor("Darn you Harold you son of a gun", ["darn", "gun"]);
console.log(result1); //=> "D*rn you Harold you son of a g*n"
var result2 = censor("Schnikeys I dont give a diddly squat", ["schnikeys", "diddly", "squat"]);
console.log(result2); //=> "Schn*k*ys I dont give a d*ddly sq**t"