 function vowelShift(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var newSentence ='';

    for (var i = 0; i < sentence.length; i += 1) {
        var char = sentence[i]; 
        if (vowels.indexOf(char) > -1) {
            // if (vowels.indexOf(char) < vowels.length - 1) {
                newSentence += vowels[(vowels.indexOf(char) + 1) % 5];
            // }
            // else if (vowels.indexOf(char) === vowels.length - 1) {
            //     newSentence += vowels[0];
            }
        // }
        else {
            newSentence += char;
        }
    }
    return newSentence;
}


console.log(vowelShift('bootcamp')); // => 'buutcemp')
console.log(vowelShift('hello world')); // => 'hillu wurld')
console.log(vowelShift('on the hunt')); // => 'un thi hant')