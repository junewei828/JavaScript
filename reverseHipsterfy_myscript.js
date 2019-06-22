var vowels = 'aeiou';

function lastIndexVowel(word) {

    for (var i = word.length - 1; i >= 0; i--) {
        var char = word[i];
        if (vowels.indexOf(char) > -1) {
            return i;
        }
    } 
}


function removeVowelsButLast(word) {
    var newWord = '';
    for (var i = 0; i < word.length; i += 1) {
        var char = word[i];

        if (vowels.indexOf(char) === -1 || i === lastIndexVowel(word)) {
            newWord += char;
        }
    }

    return newWord;
}

function reverseHipsterfy(sentence) {
    var words = sentence.split(' ');
    var newWords = []; 

    for (var i = 0; i < words.length; i += 1) {
        var word = words[i];
        newWords.push(removeVowelsButLast(word));
    }

    return newWords.join(' ');
}

console.log(reverseHipsterfy("proper")); // => 'prper'
console.log(reverseHipsterfy("proper tonic panther")); // => 'prper tnic pnther'
console.log(reverseHipsterfy("bootcamp prep")); // => 'btcamp prep'
console.log(reverseHipsterfy("towel flicker banana")); // => 'twel flcker bnna'
console.log(reverseHipsterfy("runner anaconda")); // => 'rnner ncnda'
console.log(reverseHipsterfy("turtle cheeseburger fries")); // => 'trtle chsbrger fres'
