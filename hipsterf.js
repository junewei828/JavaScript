function removeLastVowel(word) {
    var newWord = '';
    var vowels = 'aeiou'.split('');
    for (var i = word.length - 1; i >=0; i--) {
        if (vowels.indexOf(word[i]) > -1) {
            newWord = word.slice(0,i) + word.slice(i + 1);
            return newWord;
        }
    }
}

function hipsterfy(sentence) {
    var words = sentence.split(' ');
    var newArr = [];

    for (var i = 0; i < words.length; i += 1) {
        newArr.push(removeLastVowel(words[i]));
    }
    return newArr.join(' ');
} 

console.log(hipsterfy("proper")); // => "propr"
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"