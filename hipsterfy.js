function hipsterfyWord(word) {
    var vowel = ['a', 'e', 'i', 'o','u'];

    for (var j = word.length - 1; j > 0; j -= 1) {
        if (vowel.indexOf(word[j]) > -1) {
            var newWord = word.slice(0, j) + word.slice(j + 1);
            return newWord;
        }
    }  

    return word;
}

function hipsterfy(sentence) {
    var histerfiedWords = [];
    var words = sentence.split(" ");

    for (var i = 0; i < words.length; i += 1) {
        var word = words[i];
        histerfiedWords.push(hipsterfyWord(word));
    }

    var histerfiedSentence = histerfiedWords.join(' ');
    return histerfiedSentence; 
}
console.log(hipsterfy("proper")); // => "propr")
console.log(hipsterfy("proper tonic panther")); // => "propr tonc panthr"
console.log(hipsterfy("towel flicker banana")); // => "towl flickr banan"
console.log(hipsterfy("runner anaconda")); // => "runnr anacond"
console.log(hipsterfy("turtle cheeseburger fries")); // => "turtl cheeseburgr fris"