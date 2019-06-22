var vowels = 'aeiou'.split('');

function lastIndexVowel(word) {

    for (var i = 0; i < vowels.length; i++) {
        var vowel = vowels[i];
        if (word.indexOf(vowel) > -1) {
            var idx = word.indexOf(vowel)
        }
    } return idx;
}


function removeVowelsButLast(word) {
    var newWord = '';
    for (var i = 0; i < word.length; i += 1) {
        var char = word[i];

        if (vowels.indexOf(char) === -1 || word.indexOf(char) === lastIndexVowel(word)) {
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
